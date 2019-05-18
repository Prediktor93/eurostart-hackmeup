import React from 'react'

class HotelSearchForm extends React.Component {
    constructor(props) {
        super(props)
    }

    getHotelSearch(){
        let hotelinfo={
            city : document.getElementById("city").value,
            nights : document.getElementById("nights").value,
            rooms  : document.getElementById("rooms").value
        }

        console.dir(hotelinfo)
  
        const url = "/hotel"
        return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(hotelinfo)
        })
        .then(function (res) {
            console.log(res.json())
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
        <div id="hotelSelectionContainer" class="form-group">
            <div class="form-group row">
                <input id="city" class="col-6" placeholder="City" name="city" type="text"></input>
            </div>
            <div class="form-group row">
                <input id="nights" class="col-12" placeholder="Number of nights" name="nights" type="number"></input>
            </div>
            <div class="form-group row">
                <input id="rooms" class="col-12" placeholder="Number of rooms" name="rooms" type="number"></input>
            </div>
            <div class="form-group row">
                <button onClick={() => this.getHotelSearch()} class="col-6 text-center" onclick="getHotelSearch()">Search</button>
            </div>
    </div>)
    }
}
export default HotelSearchForm