import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import FavBlog from "./pages/fav-blogs/FavBlog";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav-blog" element={<FavBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
