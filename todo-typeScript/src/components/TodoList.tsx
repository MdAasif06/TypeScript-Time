import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Delete } from "lucide-react";

type todoListProps = {
  items: { id: string; text: string }[];
  onRemoveTodo:(TodoId:string)=>void
};

const TodoList: React.FC<todoListProps> = (props) => {
  return (
    <div className=" mt-5 w-96 h-fit">
      {props.items.map((item) => (
        <Card key={item.id}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{item.text}</CardTitle>
            <Button onClick={()=>props.onRemoveTodo(item.id)} className="h-6 w-6 cursor-pointer" size={'icon'}><Delete/></Button>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
