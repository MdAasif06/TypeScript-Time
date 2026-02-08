const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`http error ${response.status}`);
        }
        const data = await response.json();
    }
    catch (error) {
    }
};
export {};
// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }
//# sourceMappingURL=fetchReq.js.map