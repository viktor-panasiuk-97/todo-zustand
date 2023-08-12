import { Card, CardHeader } from '@mui/material';
import * as React from 'react';
import TaskActions from './TaskActions';
import { useTasksStore } from '../store/tasks';
interface TaskProps {
  id: string | number;
}

export default function Task({ id }: TaskProps) {
  const task = useTasksStore((store) => store.tasks[id]);

  return (
    <Card>
      <CardHeader subheader={task.title} action={<TaskActions taskId={id} />} />
    </Card>
  );
}
