import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import TV from './pages/TV/TV';
import Celebrity from './pages/Celebrity/Celebrity';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie' element={<Movies />}></Route>
        <Route path='/tv' element={<TV />}></Route>
        <Route path='/person' element={<Celebrity />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
