import "./App.css";
import { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  Input,
  FormHelperText,
  InputLabel,
} from "@material-ui/core";
import Todo from "./Todo";
import firebase from "firebase";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [query, setQuery] = useState("");
  console.log(query);
  console.log(todos);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const onClick = (event) => {
    event.preventDefault();

    db.collection("todos").add({
      todo: query,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, query]);
    setQuery("");
  };

  return (
    <div className='App'>
      <form>
        <FormControl>
          <InputLabel>Enter task here</InputLabel>
          <Input
            type='text'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <FormHelperText> </FormHelperText>
        </FormControl>
        <Button
          disabled={!query}
          type='submit'
          onClick={onClick}
          variant='contained'
          color='primary'>
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
