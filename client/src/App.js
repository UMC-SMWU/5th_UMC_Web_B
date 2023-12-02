import "./index.css";

import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Celebrity from "./pages/Celebrity";
import TV from "./pages/TV";
import NotFound from "./pages/NotFound";
import MovieDetail from "./pages/MovieDetail";
import TVDetail from "./pages/TVDetail";
import Login from "./pages/Login"



function App() {
  return (
    <div className="App">
      <div className="root-wrap">
      <BrowserRouter>
          <Header/>
          <Routes>
          <Route exact path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/movies" element={<Movies/>} />
            <Route exact path="/celebrity" element={<Celebrity/>} />
            <Route exact path="/tv" element={<TV/>} />
            <Route exact path="/*" element={<NotFound/>} />
            <Route path="/movies/:title" element={<MovieDetail/>}/>
            <Route path="/tv/:title" element={<TVDetail/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
