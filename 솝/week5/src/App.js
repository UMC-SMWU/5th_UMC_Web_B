
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";


function App() {
  return (

    <div className="root-wrap">
    <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/Celebrity" element={<Celebrity/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Movies" element={<Movies/>} />
        <Route path="/NotFound" element={<NotFound/>} />
        <Route path="/TV" element={<TV/>} />
      </Routes>
    </BrowserRouter>
   </div>


  );
}

export default App;


/*import { BrowserRouter, Route, Routes } from "react-router-dom";
import "컴포넌트" from "컴포넌트 파일 경로";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
				//A
        <Routes>
					//B
          <Route path="/설정할경로" element={컴포넌트} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
*/