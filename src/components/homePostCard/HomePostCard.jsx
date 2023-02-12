import {useAppInfo} from "../../context/appContext"
import { useNavigate } from "react-router-dom";

import "./homepostcard.css";

const HomePostCard = () => {
  const {appInfo} = useAppInfo()
  const navigate = useNavigate()
  
  return (
    <div className="card_container">
     {appInfo.posts.map(el => (
        <div onClick={()=>{navigate(`/post/${el.id}`)}} key={el.id}className="card_container-card">
        <div className="card_container-card-image">
          <img
            src="https://source.unsplash.com/random"
            alt="random img from https://source.unsplash.com/random"
          />
        </div>
        <div className="card_container-card-title">{el.title}</div>
        <div className="card_container-card-user">User:{el.userId}</div>
      </div>
     ))}
    </div>
  );
};

export default HomePostCard;
