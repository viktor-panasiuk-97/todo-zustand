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

export default function TaskActions() {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
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
          <List sx={{ p: 0 }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Todo" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="InProgress" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Done" />
              </ListItemButton>
            </ListItem>
          </List>
        }
      >
        <IconButton aria-label="settings" onClick={handleTooltipOpen}>
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
  );
}
