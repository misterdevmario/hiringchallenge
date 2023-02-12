import { Routes, Route } from "react-router-dom";
import { Home, Post, UserPosts, CrudHome } from "./views/index";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="AppContainer">
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post" element={<Post/>} />
        <Route path="/userpost" element={<UserPosts/>}/>
        <Route path="/crud" element={<CrudHome/>}/>
      </Routes>
    </div>
  );
}

export default App;
