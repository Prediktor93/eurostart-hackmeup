import React from 'react';
import TrainSearchForm from './search_components/index.jsx';
import HotelSearchForm from './hotel_search/index.jsx'
import RetrieveBookingForm from './retrieve_booking/index.jsx';
import './App.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

function App() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Train Search</Tab>
          <Tab>Hotel Search</Tab>
          <Tab>Manage Booking</Tab>
        </TabList>

        <TabPanel>
          <TrainSearchForm></TrainSearchForm>
        </TabPanel>
        <TabPanel>
          <HotelSearchForm></HotelSearchForm>
        </TabPanel>
        <TabPanel>
          <RetrieveBookingForm></RetrieveBookingForm>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
