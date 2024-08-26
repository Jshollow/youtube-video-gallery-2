import { BrowserRouter, Routes, Route } from "react-router-dom";
import Videos from "./pages/videos";
import Video from "./pages/video";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Videos />} />
      <Route path="/video/:id" element={<Video />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
