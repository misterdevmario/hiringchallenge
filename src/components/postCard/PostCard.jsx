import { useEffect, useState } from "react";
import { useAppInfo } from "../../context/appContext";
import { useParams } from "react-router-dom";
import "./postcard.css";

const PostCard = () => {
  const params = useParams();

  const { getOnePost } = useAppInfo();
  const [post, setPost] = useState({});

  useEffect(() => {
    (async () => {
      if (params.id) {
        const res = await getOnePost(params.id);
        setPost(res);
      }
    })();
  }, [params.id, getOnePost]);

  return (
    <div className="postcard_container">
      <div className="postcard_container-img">
        <img
          src="https://source.unsplash.com/random"
          alt="random img from https://source.unsplash.com/random"
        />
      </div>

      <div className="postcard_container-info">
        <h1>{post.title}</h1>
        <h2>{post.body}</h2>
        <h3>User: {post.userId}</h3>
        <h3>Post: {post.id}</h3>
      </div>
    </div>
  );
};

export default PostCard;
