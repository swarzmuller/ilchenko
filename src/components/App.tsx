import { BrowserRouter, Routes, Route } from "react-router-dom";
import Battle from "./Battle";
import Home from "./Home";
import Popular from "./Popular";
import Nav from "./Nav";
import NotFound from "./NotFound";

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
