import "./style.css";
import { Route, Routes } from "react-router-dom";
import PopularMovies from "./components/PopularMovies.js";
import TopRatedMovies from "./components/TopRatedMovies.js";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<PopularMovies />} />
          <Route path="/top-rated" element={<TopRatedMovies />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
