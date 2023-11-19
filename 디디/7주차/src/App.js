import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "../../../../7주차/src/pages/Home";
import Celebrity from "../../../../7주차/src/pages/Celebrity";
import Movies from "../../../../7주차/src/pages/Movies";
import NotFound from "../../../../7주차/src/pages/NotFound";
import Tvs from "../../../../7주차/src/pages/Tvs";
import TvDetail from "../../../../7주차/src/pages/TvDetail";
import MovieDetail from "../../../../7주차/src/pages/MovieDetail";
import Login from "../../../../7주차/src/pages/Login";
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
