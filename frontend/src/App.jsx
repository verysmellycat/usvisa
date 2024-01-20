import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavigationBar";
import Submission from "./pages/Submission";
import NotFound from "./pages/NotFound";
import Payment from "./components/Payment";

function App() {
  return (
    <div className="mx-auto sm:mb-10">
      <BrowserRouter>
        <NavBar></NavBar>
        <h1 className="font-semibold text-center text-2xl">
          加拿大美签自动预约
        </h1>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tip" element={<Payment />}></Route>
          <Route path="/submit" element={<Submission />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
