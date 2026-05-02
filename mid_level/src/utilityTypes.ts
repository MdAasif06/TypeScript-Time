interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  assignedTo: string;
}

//Partial - makes all properties optional
type PartialTodo = Partial<Todo>;
let updatedTodo: PartialTodo = {
  completed: true,
};

//Requried - mark all properties required
type RequiredTodo = Required<Todo>;

//ReadOnly - makes all peoperties readOnly
type ReadOnlyTodo = Readonly<Todo>;

let myTodo: ReadOnlyTodo = {
  title: "learn typescript",
  description: "completed",
  completed: false,
  createdAt: new Date(),
  assignedTo: "Asif",
};
// myTodo.completed=true

// Pick - pick specific properties
type TodoPreview = Pick<Todo, "title" | "completed">;

/// Omit- omit specific properties
type TodoWithoutDate = Omit<Todo, "createdAt">;

//Record - construct object type with specific keys and values

type PageInfo = {
  title: string;
  url: string;
};
type Pages = "home" | "about" | "contact";
type Merged = Record<Pages, PageInfo>;
let pages: Merged = {
  home: { title: "Home", url: "/home" },
  about: { title: "About", url: "/about" },
  contact: { title: "Contact", url: "/contact" },
};

//Return Type -get return type of function
const createUser = () => {
  return {
    id: 1,
    name: "asif",
    email: "aasifai00@gmail.com",
  };    
};
type UserType=ReturnType<typeof createUser>
