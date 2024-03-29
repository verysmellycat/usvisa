import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import UserCommunity from "./pages/UserCommunity";
import Payment from "./pages/Payment";
import Landing from "./pages/Landing";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <SharedNavbar />
        <div className="mx-auto w-5/6">
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/ais/:country" element={<Home />}></Route>
            <Route path="/cgi/:country" element={<Home />}></Route>
            <Route path="/community" element={<UserCommunity />}></Route>
            <Route path="/pay" element={<Payment />}></Route>
            <Route path="/cgi/:country" element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

function SharedNavbar() {
  const location = useLocation();
  return <>{location.pathname !== "/" && <NavBar />}</>;
}

export default App;
