import React from 'react';
import { Modal, Box, Typography, Button, TextField, Grid } from '@mui/material';

const CustomModal = ({ open, handleClose, handleAddTask, taskInput, setTaskInput }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 350,
          height: 400,
          bgcolor: 'background.paper',
          border: 'none',
          borderRadius: 5,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Add a Task
        </Typography>
        <TextField
          label="Enter your task here"
          variant="outlined"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          fullWidth
          InputProps={{
            style: {
              width: '100%',
            },
          }}
          InputLabelProps={{
            // shrink: true, 
            style: {
              fontSize: 15,
            },
          }}
        />
        <Grid container justifyContent="start" alignItems="center" mt={2}>
          <Button onClick={handleAddTask} variant="contained" color="primary" disabled={!taskInput}>
            Add Task
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default CustomModal;
