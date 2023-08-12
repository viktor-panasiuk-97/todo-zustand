import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';
import AddTask from '../AddTask';
import { ColumnId } from '../store/tasks';
interface ColumnProps {
  title: string;
  id: ColumnId;
  children?: ReactNode;
}

export default function Column({ id, title, children }: ColumnProps) {
  return (
    <Box sx={{ p: 0.25 }}>
      <Box
        sx={{
          p: 2,
          borderRadius: 4,
          backgroundColor: 'primary.main',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6">{title}</Typography>
      </Box>

      <Box
        sx={{
          p: 0.5,
          mt: 1,
          minHeight: 600,
          borderRadius: 2,
          backgroundColor: '#6c707310',
          border: '1px dashed grey',
        }}
      >
        {children}
        <AddTask columnId={id} sx={{ mt: 0.5 }} />
      </Box>
    </Box>
  );
}
