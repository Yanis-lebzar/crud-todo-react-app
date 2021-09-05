import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Modal,
  Typography,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import db from "./firebase";
import useStyles from "./styles";

function Todo({ text }) {
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const onUpdate = () => {
    db.collection("todos").doc(text.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <List>
      <Modal
        style={modalStyle}
        className={classes.modal}
        align='center'
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'>
        <div>
          <input
            placeholder={text.todo}
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            disabled={!input}
            className={classes.updateB}
            variant='contained'
            onClick={onUpdate}>
            Update
          </Button>
        </div>
      </Modal>

      <ListItem align='center'>
        <ListItemText
          className={classes.liText}
          align='center'
          primary={<Typography variant='h6'>{text.todo}</Typography>}
        />
      </ListItem>
      <Button onClick={(e) => setOpen(true)}>Edits</Button>
      <DeleteForeverIcon
        align='center'
        className={classes.delete}
        onClick={() => db.collection("todos").doc(text.id).delete()}>
        Delete
      </DeleteForeverIcon>
    </List>
  );
}

export default Todo;
