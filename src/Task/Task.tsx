import { Card, CardHeader } from '@mui/material';
import TaskActions from './TaskActions';
import { useTasksStore } from '../store/tasks';
interface TaskProps {
  id: string | number;
}

export default function Task({ id }: TaskProps) {
  const task = useTasksStore((store) => store.tasks[id]);

  return (
    <Card data-testid="task-card">
      <CardHeader subheader={task.title} action={<TaskActions taskId={id} />} />
    </Card>
  );
}
