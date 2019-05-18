import React from 'react'

class TrainSearchForm extends React.Component {
    constructor(props) {
        super(props)
    //this.state = {selectedOriginAirport: ''}
    }

    getTrainSearch(){
        const ENDPOINT = "/echo";   
        const url = ENDPOINT + this.getParams()
        return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }/*,
        body: */
        })
        .then(function (res) {
            console.log(res.text())
            return res.text()
        })
        .then(function (val) {
            return JSON.parse(val)
        })
        .catch(function (err) {
            // Send logs to an aggregation service
            console.dir(err)
        })
    }

    render() {
        return (
        <div id="airportSelectionContainer">
            <button>Return</button>
            <button>One Way</button>
            <input placeholder="City or station" name="from" type="text"></input>
            <input placeholder="City or station" name="to" type="text"></input>
            <input placeholder="Depart - return" name="when" type="text"></input>
            <button onclick="getTrainSearch()">Search</button>
    </div>)
    }
}
export default TrainSearchForm