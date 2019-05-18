import React from 'react';
import TrainSearchForm from './search_components/index.jsx';
import HotelSearchForm from './hotel_search/index.jsx';
import RetrieveBookingForm from './retrieve_booking/index.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TrainSearchForm></TrainSearchForm>
        <HotelSearchForm></HotelSearchForm>
        <RetrieveBookingForm></RetrieveBookingForm>
      </header>
    </div>
  );
}

export default App;
