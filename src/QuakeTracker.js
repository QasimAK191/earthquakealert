import React, { Component } from 'react'
import axios from 'axios'
import './App.css';

import Header from './components/Header';
import MapComponent from './components/MapComponent';
import Filter from './components/Filter';


{/*<!---------------------------- Start of  DONT TOUCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -------------------------------------------------------------------------------------->*/ }
class QuakeTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultEarthquakesData: [],
            filterData: '',
            serverNotConnectedMsg: '',
            filterTimeFormat: 'gmt',
            isLoaded: false
        }
    }

    componentDidMount() {
        axios.get(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=1000`)
            .then(res => {

                const selectedData = res.data.features.map(quake => {
                    return {
                        magnitude: quake.properties.mag,
                        place: quake.properties.place,
                        url: quake.properties.url,
                        time: quake.properties.time,
                        alert: quake.properties.alert,
                        code: quake.properties.code,
                        position: [
                            quake.geometry.coordinates[0], //longitude
                            quake.geometry.coordinates[1], //latitude
                            quake.geometry.coordinates[2], //depth
                        ],
                        id: quake.id,
                    }
                });


                this.setState({
                    defaultEarthquakesData: selectedData,
                    isLoaded: true
                });

                // console.log(this.state.defaultEarthquakesData);

            })
            .catch(error => {
                this.setState({ serverNotConnectedMsg: "Can't fetch data at this moment.", isLoaded: 'true' });
                console.log(error);
                alert("Can't fetch data at this moment... Please try again.");
            })
    }

    // state data from child component (Filter.jsx)
    fetchDataFromFilterJsx = (data) => {

        var filteredData;

        this.setState({ isLoaded: false }, () => {

            if (parseInt(data.timeFilter) === 0) {
                filteredData = this.state.defaultEarthquakesData.filter(quake => quake.magnitude >= data.magnitudeFilter);
            } else {
                filteredData = this.state.defaultEarthquakesData.filter(quake =>
                    quake.magnitude >= data.magnitudeFilter
                    && quake.time >= new Date().getTime() - parseInt(data.timeFilter, 10));
            }

            this.setState({
                filterData: filteredData,
                filterTimeFormat: data.timeFormatFilter,
                isLoaded: true
            });

        });
    }

    render() {

        let mapSection;

        if (!this.state.isLoaded) {
            mapSection = <div className="preloader"></div>;
        } else if (this.state.serverNotConnectedMsg) {
            mapSection = <div className="preload_message">{this.state.serverNotConnectedMsg}</div>;
        } else {
            if (this.state.filterData) {
                mapSection = <MapComponent quakes={this.state.filterData} filterTimeFormat={this.state.filterTimeFormat} />;
                if (this.state.filterData.length === 0) {
                    alert("No earthquakes found. Apply different filters.");
                }
                console.log("Filter applied --- Data retrieved");
            } else {
                mapSection = <MapComponent quakes={this.state.defaultEarthquakesData} filterTimeFormat={this.state.filterTimeFormat} />;
                console.log("Data retrieved");
            }
        }
        {/*<!------------------------------------------ End of  DONT TOUCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ------------------------------------------------>*/ }



        return (
            <div>
                <Header />
                <Filter fetchFilterData={this.fetchDataFromFilterJsx} />
                <div className="map__section">
                    {mapSection}
                </div>
            </div>
        )
    }
}

export default QuakeTracker;


