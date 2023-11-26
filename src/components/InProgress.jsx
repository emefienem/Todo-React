import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { CustomModal } from "./";

const style = {
  position: "absolute",
  padding: "8px",
  border: "none",
  backgroundColor: "#F5F5F5",
  cursor: "move",
  minHeight: "15vh",
  margin: "40px",
};

const InProgress = () => {
  const isMobile = useMediaQuery("(max-width:600px)")
  const [openModal, setOpenModal] = useState(false);
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setTaskInput("");
  };

  const handleAddTask = () => {
    setTasks([...tasks, taskInput]);
    console.log("Adding task:", taskInput);
    handleCloseModal();
  };

  const handleRemoveTask = (index) => {
    const updatedTask = [...tasks];
    updatedTask.splice(index, 1);
    setTasks(updatedTask);
  };

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.BOX,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        ...style,
        opacity: isDragging ? 0.5 : 1,
        borderRadius: 15,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: isMobile ? 0 : '65vh',
        bottom: isMobile ? '40vh' : '', 
        width: isMobile ? '35vh' : '60vh'
      }}
    >
      <Typography
        variant="h6"
        style={{
          position: "absolute",
          top: 0,
          left: 8,
          marginBottom: "8px",
          fontWeight: "bold",
        }}
      >
        InProgress
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          right: 20,
          top: 5,
          border: "1px solid #e3e3e3",
          borderRadius: 20,
          p: 0.7,
          color: "gray",
        }}
      >
        {tasks.length}
      </Typography>

      <div style={{ marginTop: "35px", marginBottom: "35px" }}>
        {tasks.map((task, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "8px",
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1 }}>{task}</div>
            <Button
              variant="outlined"
              color="primary"
              style={{
                border: "none",
                backgroundColor: "red",
                color: "#fff",
                borderRadius: 20,
                p: 1,
              }}
              onClick={() => handleRemoveTask(index)}
            >
              X
            </Button>
          </div>
        ))}
      </div>

      <Button
        onClick={handleOpenModal}
        style={{
          position: "absolute",
          bottom: 5,
          right: 20,
          borderRadius: 30,
          border: "1px solid #e3e3e3",
          backgroundColor: "green",
          color: "#fff",
        }}
      >
        +
      </Button>
      <CustomModal
        open={openModal}
        handleClose={handleCloseModal}
        handleAddTask={handleAddTask}
        taskInput={taskInput}
        setTaskInput={setTaskInput}
      />
    </div>
  );
};

export default InProgress;
