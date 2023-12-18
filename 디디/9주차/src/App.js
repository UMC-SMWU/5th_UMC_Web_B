import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Celebrity from "./pages/Celebrity";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Tvs from "./pages/Tvs";
import TvDetail from "./pages/TvDetail";
import MovieDetail from "./pages/MovieDetail";
import Login from "./pages/Login";
import Weather from "./Components/Weather";
//path variable
function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <div className="check">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/celebrity" element={<Celebrity />} />
            <Route path="/tv" element={<Tvs />} />
            <Route path="/tv/:name" element={<TvDetail />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="/movie/:title" element={<MovieDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
