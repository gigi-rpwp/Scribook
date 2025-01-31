import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  //console.log(response.data);
  return response.data;
};
