import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const CourseAdd = (props) => {
  const [open, setOpen] = useState(false);
  const [editMessage, setEditMessage] = useState("");
  const [course, setCourse] = useState({
    courseId: "",
    title: "",
    credits: "",
  });

  /*
   *  dialog for add course
   */
  const editOpen = () => {
    setOpen(true);
    setEditMessage("");
  };

  const editClose = () => {
    setOpen(false);
    setCourse({ courseId: "", title: "", credits: "" });
    setEditMessage("");
  };

  const editChange = (event) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const onSave = () => {
    if (course.courseId === "") {
      setEditMessage("CourseId can not be blank");
    } else if (course.title === "") {
      setEditMessage("Title can not be blank");
    } else if (!/^\d+$/.test(course.credits)) {
      setEditMessage("Credits must be integer");
    } else if (+course.credits < 0) {
      setEditMessage("Credits cannot be negative");
    } else {
      props.save(course);
      editClose();
    }
  };

  return (
    <>
      <Button onClick={editOpen}>Add Course</Button>
      <Dialog open={open}>
        <DialogTitle>Add Course</DialogTitle>
        <DialogContent style={{ paddingTop: 20 }}>
          <h4>{editMessage}</h4>
          <TextField
            style={{ padding: 10 }}
            autoFocus
            fullWidth
            label="courseId"
            name="courseId"
            value={course.courseId}
            onChange={editChange}
          />
          <TextField
            style={{ padding: 10 }}
            fullWidth
            label="title"
            name="title"
            value={course.title}
            onChange={editChange}
          />
          <TextField
            style={{ padding: 10 }}
            fullWidth
            label="credits"
            name="credits"
            value={course.credits}
            onChange={editChange}
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={editClose}>
            Close
          </Button>
          <Button color="primary" onClick={onSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CourseAdd;
