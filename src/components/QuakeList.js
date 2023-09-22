import React, { Component } from 'react'
import axios from 'axios'
import './QuakeList.css';

import  QuakeListFilter from './QuakeListFilter';
import ListComponent from './ListComponent';

class QuakeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultEarthquakesData: [],  // [{}, {}, {},----]
            filterData: '',
            serverNotConnectedMsg: '',
            filterTimeFormat: 'gmt',
            isLoaded: false
        }
    }

    componentDidMount() {
        axios.get(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=1000`)
            .then(res => {
                // console.log(res.data.features);    ////---> returns whole features array from JSON api data

                // this.setState({
                //   features: res.data.features      ////---> other and direct way to take and set whole features array and pass the 'features' as a props into MapComponent'.
                // });

                ////----> Below selectedData is a selected properties from a whole json data which returns a dictionary of each quake   

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
                this.setState({ serverNotConnectedMsg: "Can't fetch data at this moment. Check your internet connection and try again.", isLoaded: 'true' });
                console.log(error);
                alert("We couldn't reach our servers. You may not be connected to internet. Please try again...");
            })
    }

    // state data from child component (Filter.jsx)
    fetchDataFromFilterJsx = (data) => {

        var filteredData;

        this.setState({ isLoaded: false }, () => {
            // console.log("Passed MAGNITUDE filter Data from Child(Filter.jsx) to Parent(App.js):", data.magnitudeFilter);
            // console.log("Passed TIME filter Data from Child(Filter.jsx) to Parent(App.js):", data.timeFilter);
            // console.log("current time:", new Date().getTime());
            // console.log("time EPOCH for last hour:", new Date().getTime() - parseInt(data.timeFilter, 10));

            if (parseInt(data.timeFilter) === 0) {
                filteredData = this.state.defaultEarthquakesData.filter(quake => quake.magnitude >= data.magnitudeFilter);
            } else {
                filteredData = this.state.defaultEarthquakesData.filter(quake => quake.magnitude >= data.magnitudeFilter && quake.time >= new Date().getTime() - parseInt(data.timeFilter, 10));
            }

            // console.log("filterData:", filteredData);
            // console.log("filterDataLength:", filteredData.length);

            this.setState({
                filterData: filteredData,
                filterTimeFormat: data.timeFormatFilter,
                isLoaded: true,
            });

        });
    }

    render() {

        let listSection;

        if (!this.state.isLoaded) {
            listSection = <div className="preloader"></div>;
        } else if (this.state.serverNotConnectedMsg) {
            listSection = <div className="preload_message">{this.state.serverNotConnectedMsg}</div>;
        } else {
            if (this.state.filterData) {
                listSection = <ListComponent quakes={this.state.filterData} filterTimeFormat={this.state.filterTimeFormat} />;
                if (this.state.filterData.length === 0) {
                    alert("No earthquakes found. Apply different filters.");
                }
                console.log("filtered quake data executed");
            } else {
                listSection = <ListComponent quakes={this.state.defaultEarthquakesData} filterTimeFormat={this.state.filterTimeFormat} />;
                console.log("default quake data executed");
            }
        }

        return (
            <div>
                <QuakeListFilter fetchFilterData={this.fetchDataFromFilterJsx} />
                <div className="list__section">
                    {listSection}
                </div>
            </div>
        )
    }
}

export default QuakeList;


