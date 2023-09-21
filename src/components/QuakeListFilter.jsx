import React, { Component } from 'react';
import { Form, FormGroup, CustomInput, Input } from 'reactstrap';
import './QuakeListFilter.css'

class QuakeListFilter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filterIsOpenAddDisplayClass: true,
            magnitudeFilter: -1,
            timeFilter: 0,
            timeFormatFilter: 'gmt',
            magnitudeSort: 0,
        }

        this.toggleFilter = this.toggleFilter.bind(this);
        this.magnitudeChangeHandler = this.magnitudeChangeHandler.bind(this);
        this.timeChangeHandler = this.timeChangeHandler.bind(this);
        this.magnitudeSortHandler = this.magnitudeSortHandler.bind(this);
    }

    toggleFilter() {
        this.setState({
            filterIsOpenAddDisplayClass: !this.state.filterIsOpenAddDisplayClass
        });
    }

    magnitudeChangeHandler(event) {
        this.setState({
            magnitudeFilter: event.target.value
        });
    }

    timeChangeHandler(event) {
        this.setState({
            timeFilter: event.target.value
        });
    }

    timeFormatChangeHandler(event) {
        this.setState({
            timeSort: event.target.value
        });
    }

    magnitudeSortHandler(event) {
        this.setState({
            magnitudeSort: event.target.value
        });
    }

    componentDidUpdate(prevProps, prevState) {   // This life cycle method is used to pass state data into parent component (QuakeList.js)
        if (this.state.magnitudeFilter !== prevState.magnitudeFilter) {
            // console.log("component update due to magnitude filter");
            this.props.fetchFilterData(this.state);
        } else if (this.state.timeFilter !== prevState.timeFilter) {
            // console.log("component update due to time filter");
            this.props.fetchFilterData(this.state);
        } else if (this.state.timeFormatFilter !== prevState.timeFormatFilter) {
            // console.log("component update due to time FORMAT filter");
            this.props.fetchFilterData(this.state);
        }
    }

    render() {

        let filter_sec_class_list = ["filter_sec2"];
        if (!this.state.filterIsOpenAddDisplayClass) {
            filter_sec_class_list.push('display_none');
        }

        // console.log("gives mag in string (got to convert it into Int)", this.state.magnitudeFilter);

        return (
            <>
                <div className="toggle__filter" onClick={this.toggleFilter}>
                    Filters
                </div>
                <div className={filter_sec_class_list.join(' ')}>
                    <Form>
                        <FormGroup >
                            <CustomInput type="radio" id="magGreaterThan0" name="mag" value={-1} label="All" checked={parseInt(this.state.magnitudeFilter, 10) === -1} onChange={this.magnitudeChangeHandler} />
                            <CustomInput type="radio" id="magGreaterThan3" name="mag" value={3.5} label="Magnitude &#8805; 3.5" checked={parseFloat(this.state.magnitudeFilter) === 3.5} onChange={this.magnitudeChangeHandler} />
                            <CustomInput type="radio" id="magGreaterThan6" name="mag" value={6} label="Magnitude &#8805; 6" checked={parseInt(this.state.magnitudeFilter, 10) === 6} onChange={this.magnitudeChangeHandler} />
                            <CustomInput type="radio" id="magGreaterThan8" name="mag" value={8} label="Magnitude &#8805; 8" checked={parseInt(this.state.magnitudeFilter, 10) === 8} onChange={this.magnitudeChangeHandler} />
                        </FormGroup>
                        <hr />
                    </Form>
                    <Form>
                        <FormGroup>
                            <CustomInput type="radio"
                                id="lastmonth"
                                name="timefilter"
                                value={2591999999}
                                label="Last 30 Days"
                                checked={parseInt(this.state.timeFilter, 10) === 2591999999}
                                onChange={this.timeChangeHandler} />
                            <CustomInput type="radio"
                                id="lastweek"
                                name="timefilter"
                                value={604800000}
                                label="Last 7 Days"
                                checked={parseInt(this.state.timeFilter, 10) === 604800000}
                                onChange={this.timeChangeHandler} />
                            <CustomInput type="radio"
                                id="lastday"
                                name="timefilter"
                                value={86400000}
                                label="Last 24 Hours"
                                checked={parseInt(this.state.timeFilter, 10) === 86400000}
                                onChange={this.timeChangeHandler} />
                            <CustomInput type="radio"
                                id="lasthour"
                                name="timefilter"
                                value={3600000}
                                label="Last Hour"
                                checked={parseInt(this.state.timeFilter, 10) === 3600000}
                                onChange={this.timeChangeHandler} />
                        </FormGroup>
                        <hr />
                    </Form>
                    <Form>
                        <FormGroup>
                            
                            <p className="filter__sec__notice">*Defaults to 'Last 30 Days'. <br />*Defaults to 'All' magnitude. <br />&#128308; Earthquakes with &#8805; 6 magnitude. <br /> &#128992; Earthquakes with &#8805; 4 and &#60; 6 magnitude. <br /> &#128309; Earthquakes with &#60; 4 magnitude.</p>
                        </FormGroup>
                    </Form>
                        <Form>
                            <FormGroup>
                                <CustomInput type="radio"
                                    id="high-to-low"
                                    name="magnitudeSort"
                                    value={0}
                                    label="Sort by highest magnitude to lowest"
                                    checked={parseInt(this.state.timeFilter, 10) === 0}
                                    onChange={this.magnitudeSortHandler} />
                                <CustomInput type="radio"
                                    id="low-to-high"
                                    name="magnitudeSort"
                                    value={1}
                                    label="Sort by highest magnitude to lowest"
                                    checked={parseInt(this.state.timeFilter, 10) === 1}
                                    onChange={this.magnitudeSortHandler} />
                            </FormGroup>
                        </Form>
                </div>
            </>
        )
    }
}

export default QuakeListFilter;