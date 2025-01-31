import PostList from "../components/PostList";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <PostList />
    </div>
  );
}

export default Home;
