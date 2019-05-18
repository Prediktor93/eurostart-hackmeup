import React from 'react'

class TrainSearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {type: ''}
    }

    setTravelType(val){
        this.setState({type : val})
    }

    getTrainSearch(){
        let traininfo={
            from : document.getElementById("from").value,
            to : document.getElementById("to").value,
            passenger:document.getElementById("passengers").value,
            type : this.state.type
        }

        console.dir(traininfo)
  
        const url = "/train"
        return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(traininfo)
        })
        .then(function (res) {
            //console.log(res.json())
            return res.text()
        })
        .then(function (val) {
            console.log(JSON.parse(val))
            return JSON.parse(val)
        })
        .catch(function (err) {
            // Send logs to an aggregation service
            //console.dir(err)
        })
    }

    render() {
        return (
        <div id="airportSelectionContainer" class="form-group">
            <div class="form-group row">
                <button onClick={() => this.setTravelType('VUELTA')} class="btn btn-primary col-6">Return</button>
                <button onClick={() => this.setTravelType('IDA')} class="btn btn-primary col-6">One Way</button>
            </div>
            <div class="form-group row">
                <input id="from" class="col-6" placeholder="City or station" name="from" type="text"></input>
                <input id="to" class="col-6" placeholder="City or station" name="to" type="text"></input>
            </div>
            <div class="form-group row">
                <input id="passengers" class="col-12" placeholder="Depart - return" name="when" type="text"></input>
            </div>
            <div class="form-group row">
                <button onClick={() => this.getTrainSearch()} class="col-6 text-center" onclick="getTrainSearch()">Search</button>
            </div>
    </div>)
    }
}
export default TrainSearchForm