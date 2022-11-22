import "./style.css";
import { Route, Routes } from "react-router-dom";
import PopularMovies from "./components/PopularMovies.js";
import TopRatedMovies from "./components/TopRatedMovies.js";
import MovieSearch from "./components/MovieSearch.js";
import MovieDetails from "./components/MovieDetails.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<PopularMovies />} />
          <Route path="/top-rated" element={<TopRatedMovies />} />
          <Route path="/search" element={<MovieSearch />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
