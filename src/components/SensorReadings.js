// src/components/SensorReadings.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #333;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SensorReadings = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://your-server-url/sensor-data')
      .then(response => setData(response.data))
      .catch(error => setError('Error fetching data'));
  }, []);

  return (
    <Container>
      <Title>Sensor Readings</Title>
      {error && <p>{error}</p>}
      <List>
        {data.map((reading, index) => (
          <ListItem key={index}>
            <strong>{reading.sensorName}:</strong> {reading.value} {reading.unit}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SensorReadings;
