import { useState, type ChangeEvent} from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type AddTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [text, setText] = useState<string>("");

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const submitHandler = (e: ChangeEvent) => {
    e.preventDefault();
    onAddTodo(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="flex items-center gap-5">
        <Input
          onChange={changeEventHandler}
          value={text}
          className="w-fit"
          type="text"
          placeholder="write new todo..."
        />
        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  );
};

export default AddTodo;
