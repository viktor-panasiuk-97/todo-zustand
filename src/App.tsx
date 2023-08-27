import React from 'react';
import { Grid, Container } from '@mui/material';
import Column from './Column';
import Task from './Task';
import { COLUMNS, useTasksStore } from './store/tasks';

function App() {
  const columnsList = useTasksStore((store) => store.columnsList);
  return (
    <Container>
      <Grid container>
        {COLUMNS.map(({ label, id }) => (
          <Grid xs={4} key={label} data-testid={`column-${id}`}>
            <Column title={label} id={id}>
              {columnsList[id].map((taskId) => (
                <Task key={taskId} id={taskId} />
              ))}
            </Column>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
