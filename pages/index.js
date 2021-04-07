import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [addPost, setAddPost] = useState(false);
  useEffect(() => {
    axios.get("/api/post").then((res) => {
      setPosts(res.data);
    });
  }, []);
  const onHandleSubmit = (post) => {
    axios.post("/api/post", post).then((res) => {
      toast.success("Your post add successfully");
      setPosts([...posts, res.data]);
      setAddPost((prev) => !prev);
    });
  };

  return (
    <div className="container mt-5">
      {addPost ? (
        <AddPost handleSubmit={onHandleSubmit} />
      ) : (
        <div>
          <div className="d-flex justify-content-end">
            <button
              onClick={() => setAddPost((prev) => !prev)}
              className="btn btn-sm btn-success"
            >
              Add New Post
            </button>
          </div>
          {posts.map((post, index) => (
            <Post post={post} key="index" />
          ))}
        </div>
      )}

      <div className="my-5"></div>
    </div>
  );
}
