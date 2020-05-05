import React from 'react';
import { Container, Grid } from '@material-ui/core';
import axios from 'axios';

const Dashboard = async () => {
  const a = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return (
    <Container>
      <Grid>
        <h1>DASHBOARD</h1>
      </Grid>
      <Grid>{}</Grid>
    </Container>
  );
};

export default Dashboard;
