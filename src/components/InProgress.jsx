import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { Button, Typography, useMediaQuery, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
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
  const isMobile = useMediaQuery("(max-width:600px)");
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

  // const totalHeight = tasks.reduce((acc, task) => acc + task.height, 0);

  return (
    <div
      ref={drag}
      style={{
        ...style,
        opacity: isDragging ? 0.5 : 1,
        borderRadius: 15,
        display: isMobile ? "block" : "flex",
        flexDirection: "column",
        position: "absolute",
        left: isMobile ? 0 : "65vh",
        bottom: isMobile ? "35vh" : "",
        width: isMobile ? "37vh" : "60vh",
        height: isMobile ? "15vh" : "",
        flex: 1,
        overflowY: isMobile ? "auto" : "",
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
              width: isMobile ? "100%" : "",
              boxSizing: "border-box",
            }}
          >
            <div style={{ flex: 1 }}>{task}</div>
            <IconButton
              style={{
                border: "none",
                backgroundColor: "red",
                color: "#fff",
                borderRadius: 20,
              }}
              onClick={() => handleRemoveTask(index)}
            >
              <Close />
            </IconButton>
          </div>
        ))}
      </div>

      <Button
        onClick={handleOpenModal}
        style={{
          position: isMobile ? "relative" : "absolute",
          bottom: isMobile ? 2 : 5,
          right: isMobile ? 0 : 20,
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
