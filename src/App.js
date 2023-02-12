import { Routes, Route } from "react-router-dom";
import { Home, Post, UserPosts } from "./views/index";
import "./App.css";

function App() {
  return (
    <div className="AppContainer">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post" element={<Post/>} />
        <Route path="/userpost" element={<UserPosts/>}/>
      </Routes>
    </div>
  );
}

export default App;
