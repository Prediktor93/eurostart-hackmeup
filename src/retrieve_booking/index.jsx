import React from 'react'

class RetrieveBookingForm extends React.Component {
    constructor(props) {
      super(props)
    }

    getBooking() {
      const bookingNumber = document.getElementById('bnumber').value
      const lastName = document.getElementById('lname').value
      const isValidBookingNumber = /[A-z]{6}/.test(bookingNumber);
      if (!isValidBookingNumber) {
        // ...
      }
      const url = "http://localhost:3000/retrieve?booking=" + bookingNumber + "&name=" + lastName;
      return fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
      })
      .then(function (res) {
          return res.text()
      })
      .then(function (val) {
          return JSON.parse(val)
      })
      .catch(function (err) {
          console.dir(err)
      })
    }

    render() {
        return (
        <div id="retrieveBookingContainer">
            <input placeholder="Booking number" name="bnumber" id="bnumber" type="text"></input>
            <input placeholder="Last name" name="lname" id="lname" type="text"></input>
            <button id="retrieve_booking" onClick={this.getBooking}>Search</button>
        </div>)
    }
}
export default RetrieveBookingForm