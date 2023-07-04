import { Card, CardHeader } from '@mui/material';
import * as React from 'react';
import TaskActions from './TaskActions';
interface TaskProps {
  title: string;
  children?: React.ReactNode;
}

export default function Task({ title }: TaskProps) {
  return (
    <Card>
      <CardHeader subheader={title} action={<TaskActions />} />
    </Card>
  );
}
