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
        <div id="airportSelectionContainer" class="form-group">
            <div class="form-group row">
                <button class="btn btn-primary col-6">Return</button>
                <button class="btn btn-primary col-6">One Way</button>
            </div>
            <div class="form-group row">
                <input class="col-6" placeholder="City or station" name="from" type="text"></input>
                <input class="col-6" placeholder="City or station" name="to" type="text"></input>
            </div>
            <div class="form-group row">
                <input class="col-12" placeholder="Depart - return" name="when" type="text"></input>
            </div>
            <div class="form-group row">
                <button class="col-6 text-center" onclick="getTrainSearch()">Search</button>
            </div>
    </div>)
    }
}
export default TrainSearchForm