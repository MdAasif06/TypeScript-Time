import axios, { type AxiosResponse } from "axios";

interface todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response:AxiosResponse<todo>=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
     console.log(response.data)
      
  } catch (error:any) {
    if(axios.isAxiosError(error)){
        console.log("Axios error",error.message)
        if(error.response){
            console.log(error.response.status)
        }
    }
  }
};

// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }
