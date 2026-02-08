interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}
async function fetchPost(): Promise<Post[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await response.json();
    return posts;
  } catch (error) {
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
