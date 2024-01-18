import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Submission from "./pages/Submission";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="w-3/4 mx-auto mb-10">
      <BrowserRouter>
        <Navbar></Navbar>
        <h1 className="font-semibold text-center text-2xl">
          加拿大美签自动预约
        </h1>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/submit" element={<Submission />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
