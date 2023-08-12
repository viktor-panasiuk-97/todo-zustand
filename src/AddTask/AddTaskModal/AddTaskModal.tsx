import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { ColumnId, useTasksStore } from '../../store/tasks';

interface ColumnProps {
  open: boolean;
  columnId: ColumnId;
  onClose: () => void;
}

export default function AddTaskModal({ open, onClose, columnId }: ColumnProps) {
  const addNewTask = useTasksStore((store) => store.addNewTask);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    addNewTask({
      id: new Date().getTime(),
      columnId,
      title: e.target.title.value,
    });
    onClose();
  };

  return (
    <Modal
      open={open}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ p: 1, background: '#fff', width: 600, maxWidth: '100%' }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Add new task
          </Typography>
          <TextField
            name="title"
            sx={{ width: '100%' }}
            id="outlined-basic"
            type="text"
            label="Title"
            variant="outlined"
          />
          <Box
            sx={{
              mt: 1,
              display: 'flex',
              justifyContent: 'end',
            }}
          >
            <Button type="submit" variant="contained">
              Add task
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}
