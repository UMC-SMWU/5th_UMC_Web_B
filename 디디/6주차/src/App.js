import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import Celebrity from './pages/Celebrity';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import Tv from './pages/Tv';
import MovieDetail from './pages/MovieDetail';
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
            <Route path="/tv" element={<Tv />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="/movie/:title" element={<MovieDetail />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
