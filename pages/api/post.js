import connectDB from "../../middleware/db";
import Post from "../../models/post";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { title, body, author } = req.body;
    if (title && body && author) {
      try {
        var post = new Post({
          title,
          body,
          author,
        });

        var post = await post.save();
        return res.status(200).send(post);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("bad request");
    }
  } else {
    Post.find({}, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};

export default connectDB(handler);
