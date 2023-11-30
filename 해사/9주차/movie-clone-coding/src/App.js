import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Celebrity from './pages/Celebrity/Celebrity';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import VideoDetail from './pages/VideoDetail/VideoDetail';
import Movies from './pages/Movies/Movies';
import NotFound from './pages/NotFound/NotFound';
import TV from './pages/TV/TV';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
        <Route path='/person' element={<Celebrity />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/movie/:title' element={<VideoDetail />}></Route>
        <Route path='/tv' element={<TV />}></Route>
        <Route path='/tv/:title' element={<VideoDetail />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
