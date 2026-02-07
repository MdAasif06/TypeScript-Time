import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/todo";


const App = () => {
  // const todos = [{ id: "D1", text: "Complete typescript" }];
  const [todos,setTodos]=useState<Todo[]>([])

  const addTodoHandler=(text:string)=>{
    const id=Math.random().toString()
    setTodos([...todos,{id,text}])
  }
  const removeTodoHandler=(todoId:string)=>{
    const newTodo=todos.filter((todo:Todo)=>{
      return todo.id !== todoId
    })
    setTodos(newTodo)
  }



  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="m-2">Todo App Using TypeScript</h2>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
};

export default App;
