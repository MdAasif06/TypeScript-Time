
interface todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
     if(!response.ok){
        throw new Error(`http error ${response.status}`)
     }
     const data:todo=await response.json()
      
  } catch (error:any) {
    
  }
};

// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }
