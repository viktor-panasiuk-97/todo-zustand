import { Box, Button, Modal, TextField, Typography } from '@mui/material';

interface ColumnProps {
  open: boolean;
  onClose: () => void;
}

export default function AddTaskModal({ open, onClose }: ColumnProps) {
  return (
    <Modal
      open={open}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ p: 1, background: '#fff', width: 600, maxWidth: '100%' }}>
        <form>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Add new task
          </Typography>
          <TextField
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
            <Button variant="contained">Add task</Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}
