import "./style.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import PopularMovies from "./components/PopularMovies.js";
import TopRatedMovies from "./components/TopRatedMovies.js";
import MovieSearch from "./components/MovieSearch.js";
import MovieDetails from "./components/MovieDetails.js";
import GenreLinks from "./components/GenreLinks.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/movie-explorer-app" element={<PopularMovies />} />
          <Route path="/" element={<PopularMovies />} />
          <Route path="/top-rated" element={<TopRatedMovies />} />
          <Route path="/search" element={<MovieSearch />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/genre/:id" element={<GenreLinks />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
