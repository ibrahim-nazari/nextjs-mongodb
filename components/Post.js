import React from "react";

const post = ({ post }) => {
  return (
    <div className="my-3">
      <h3 className="text-center mb-3">{post.title}</h3>
      <p> Author : {post.author}</p>
      <div>{post.body}</div>
    </div>
  );
};

export default post;
