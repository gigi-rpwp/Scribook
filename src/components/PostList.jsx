import Post from "./Post";
import posts from "../data/posts.json";

function PostList() {
  const postList = posts.map((post) => {
    return <Post key={post.id} post={post} />;
  });

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Novedades</h1>
      <div className="list-group">{postList}</div>
    </div>
  );
}

export default PostList;
