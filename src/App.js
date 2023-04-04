import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import MovieSummary from "./Components/MainContent/MovieSummary";
import BookMyMovie from "./Components/MainContent/BookMyMovie";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/moviesummary/:id" element={<MovieSummary />} />
          <Route exact path="/bookmymovie/:id" element={<BookMyMovie />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
