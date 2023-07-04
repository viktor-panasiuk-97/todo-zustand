import React from 'react';
import { Grid, Container } from '@mui/material';
import Column from './Column';
import Task from './Task';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid xs={4}>
          <Column title="To Do">
            <Task title="Implement todo via zustand." />
          </Column>
        </Grid>
        <Grid xs={4}>
          <Column title="In Progress" />
        </Grid>
        <Grid xs={4}>
          <Column title="Done" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
