import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "../../Routes/Home";
import { Drinks } from "../../Routes/Drinks";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drink" element={<Drinks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
