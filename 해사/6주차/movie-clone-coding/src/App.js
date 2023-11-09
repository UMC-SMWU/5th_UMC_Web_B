import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Celebrity from './pages/Celebrity/Celebrity';
import Detail from './pages/Detail/Detail';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import NotFound from './pages/NotFound/NotFound';
import TV from './pages/TV/TV';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie' element={<Movies />}></Route>
        <Route path='/movie/:title' element={<Detail />}></Route>
        <Route path='/tv' element={<TV />}></Route>
        <Route path='/person' element={<Celebrity />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
