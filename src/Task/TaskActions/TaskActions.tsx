import {
  ClickAwayListener,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import * as React from 'react';
import { ColumnId, COLUMNS, TaskId, useTasksStore } from '../../store/tasks';
interface TaskActionsProps {
  taskId: TaskId;
}
export default function TaskActions({ taskId }: TaskActionsProps) {
  const [open, setOpen] = React.useState(false);
  const moveTask = useTasksStore((store) => store.moveTask);
  const task = useTasksStore((store) => store.tasks[taskId]);
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const moveTicketTo = (toColumnId: ColumnId) => {
    moveTask(taskId, task.columnId, toColumnId);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        componentsProps={{
          tooltip: {
            sx: {
              backgroundColor: '#fff',
              color: '#000',
              p: 0,
              m: 0,
              boxShadow: '0 0 1px #000',
            },
          },
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableTouchListener
        title={
          <List sx={{ p: 0 }} data-testid="task-actions-list">
            {COLUMNS.map(({ id, label }) => (
              <ListItem disablePadding key={id}>
                <ListItemButton
                  disabled={id === task.columnId}
                  onClick={() => moveTicketTo(id)}
                >
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        }
      >
        <IconButton
          data-testid="task-actions-btn"
          aria-label="settings"
          onClick={handleTooltipOpen}
        >
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
  );
}
