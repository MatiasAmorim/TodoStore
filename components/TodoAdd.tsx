import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";

import { useTodoContext, addTodo } from "../stores/store";

function TodoAdd() {
  const [text, textSet] = React.useState("");
  const [, todosSet] = useTodoContext();

  const handleKeyDown = (event:any) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      console.log('User pressed Enter ✅');

      // 👇️ access input value
      console.log(event.target.value);
    }
  };
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        value={text}
        onChange={(evt) => textSet(evt.target.value)}
        placeholder="New todo"
        onKeyDown={handleKeyDown}
      />
      <Button
        onClick={() => {
          todosSet((tl) => addTodo(tl, text));
          textSet("");
        }}
      >
        Add Todo
      </Button>
    </Grid>
  );
}

export default TodoAdd;