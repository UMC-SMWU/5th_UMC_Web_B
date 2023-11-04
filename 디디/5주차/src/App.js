import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import Celebrity from './pages/Celebrity';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import Tv from './pages/Tv';

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
            <Route path="/movies" element={<Movies />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
