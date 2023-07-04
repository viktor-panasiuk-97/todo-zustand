import { Button } from '@mui/material';
interface AddTaskProps {
  onClick?: () => void;
  sx: any;
}

export default function AddTask({ sx, onClick }: AddTaskProps) {
  return (
    <Button
      sx={{
        width: '100%',
        p: 1.5,
        border: '1px dashed #ccc',
        borderRadius: 1,
        textAlign: 'center',
        color: '#ccc',
        fontSize: '0.75rem',
        cursor: 'pointer',
        ...sx,
      }}
    >
      Add new task
    </Button>
  );
}
