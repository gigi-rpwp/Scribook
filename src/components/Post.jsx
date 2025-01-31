function Post({ post }) {
  return (
    <div className="list-group-item">
      <h5 className="mb-1">{post.userId}</h5>
      <p className="mb-1">{post.body}</p>
      <small>28/01/2025 14:16:45</small>
    </div>
  );
}

export default Post;
