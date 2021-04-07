import React, { useState } from "react";
import { toast } from "react-toastify";

const addPost = ({ handleSubmit }) => {
  const [buttonText, setButtonText] = useState("Send Post");
  const [post, setPost] = useState({
    title: "",
    body: "",
    author: "",
  });
  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const submitPost = (e) => {
    e.preventDefault();
    if (post.title == "" || post.body == "" || post.author == "")
      return toast("Please fill out all the fields correctly");
    e.preventDefault();
    setButtonText("Processing");
    handleSubmit(post);
    setPost({ ...post, title: "", body: "", author: "" });
  };
  return (
    <div className="col-md-4 offset-4">
      <h4 className="text-center"> Add Post</h4>
      {buttonText == "Processing" && (
        <div className="d-flex justify-content-end">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            onChange={onChange}
            value={post.title}
            name="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            onChange={onChange}
            value={post.author}
            name="author"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bodypost">Title</label>
          <textarea
            type="text"
            className="form-control"
            name="bodypost"
            id="bodypost"
            onChange={onChange}
            value={post.body}
            name="body"
          />
        </div>
        <div className="form-group">
          <button
            disabled={buttonText == "Processing" ? true : false}
            onClick={submitPost}
            className="btn btn-sm btn-info"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default addPost;
