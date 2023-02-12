import axios from "axios"

export const getPostsRequest = async () => await axios.get("https://jsonplaceholder.typicode.com/posts")