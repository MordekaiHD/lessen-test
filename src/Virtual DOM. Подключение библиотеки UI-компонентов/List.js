import React, { useState } from "react";
import { TextField, Button, List, ListItem, ListItemText, IconButton, Card, CardContent } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="tasks">
      <TextField
        className="task-input"
        label="Новая задача"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}> Добавить </Button>

      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <Card variant="outlined">
              <CardContent className="card-content" >
                <ListItemText primary={task} />
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
                  <DeleteIcon />
                </IconButton>
              </CardContent >
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
