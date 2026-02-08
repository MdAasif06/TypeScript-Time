import axios, {} from "axios";
const fetchData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Axios error", error.message);
            if (error.response) {
                console.log(error.response.status);
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
//# sourceMappingURL=WebReq.js.map