import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle, Container } from "./App.style";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import Celebrity from "./pages/Celebrity";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle /> {/* 전역 스타일 적용 */}
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/celebrity" element={<Celebrity />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
