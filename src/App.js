// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SensorReadings from './components/SensorReadings';
import SensorChart from './components/SensorChart';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
`;

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://your-server-url/sensor-data')
      .then(response => setData(response.data))
      .catch(error => setError('Error fetching data'));
  }, []);

  return (
    <AppContainer>
      <Header>
        <h1>Environmental Monitoring System</h1>
      </Header>
      <SensorReadings />
      <SensorChart data={data} />
    </AppContainer>
  );
};

export default App;
