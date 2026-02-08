async function fetchPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        return posts;
    }
    catch (error) {
        console.log(error);
        return [];
        // throw new Error("error");
    }
}
async function main() {
    const post = await fetchPost();
    console.log(post);
}
main();
export {};
//# sourceMappingURL=ApiCall.js.map