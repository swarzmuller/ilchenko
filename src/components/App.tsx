import { BrowserRouter, Routes, Route } from "react-router-dom";
import Battle from "./Pages/Battle";
import Home from "./Pages/Home";
import Popular from "./Pages/Popular";
import NotFound from "./Pages/NotFound";
import Results from "./Pages/Battle/Results";
import Nav from "./Nav";


import "./../index.css";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/battle/results" element={<Results />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
