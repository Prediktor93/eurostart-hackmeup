import React from 'react'

class RetrieveBookingForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {booking:{}};
    }

    async getBooking() {
      const bookingNumber = document.getElementById('bnumber').value
      const lastName = document.getElementById('lname').value
      const isValidBookingNumber = /[A-z]{6}/.test(bookingNumber);
      if (!isValidBookingNumber) {
        // ...
      }
      const url = "retrieve?booking=" + bookingNumber + "&name=" + lastName;
      const data = await fetch(url, {
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
      console.dir(data);
      this.setState({booking: data});
    }

    render() {
        return (
        <div id="retrieveBookingContainer">
            <input placeholder="Booking number" name="bnumber" id="bnumber" type="text"></input>
            <input placeholder="Last name" name="lname" id="lname" type="text"></input>
            <button id="retrieve_booking" onClick={() => this.getBooking()}>Search</button>
            <div>{JSON.stringify(this.state.booking)}</div>
        </div>)
    }
}
export default RetrieveBookingForm