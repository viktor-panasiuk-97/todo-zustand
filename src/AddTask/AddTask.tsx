import { Button } from '@mui/material';
import * as React from 'react';
import AddTaskModal from './AddTaskModal';
interface AddTaskProps {
  onClick?: () => void;
  sx: any;
}

export default function AddTask({ sx }: AddTaskProps) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
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
      <AddTaskModal open={open} onClose={handleClose} />
    </>
  );
}
