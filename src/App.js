import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import TrainSearchForm from './search_trains/index.jsx';
import HotelSearchForm from './hotel_search/index.jsx'
import RetrieveBookingForm from './retrieve_booking/index.jsx';
import './App.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

function AppRouter() {
  return (
    <div>
      <div id="mainContainer" class="form-signin">
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
    </div>
  );
}

export default AppRouter;
