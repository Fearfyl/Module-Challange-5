import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import NewPost from "./pages/NewPost";
import Navbar from "./components/Navbar";


  const App = () => {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postdetails" element={<PostDetail/>} />
          <Route path="/newposts" element={<NewPost />} />
        </Routes>
        <Footer />
      </Router>
    );
  };
  
  export default App;