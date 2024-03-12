import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import UserCommunity from "./pages/UserCommunity";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { IoLanguage } from "react-icons/io5";
import Payment from "./pages/Payment";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <div className="mx-auto w-5/6">
          <SharedNavbar />
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/ais/:country" element={<Home />}></Route>
            <Route path="/cgi/:country" element={<Home />}></Route>
            <Route path="/community" element={<UserCommunity />}></Route>
            <Route path="/pay" element={<Payment />}></Route>
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

function SharedHeading() {
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <>
      {location.pathname !== "/" && (
        <div className="relative flex items-center">
          <h1 className="mx-auto text-center text-2xl font-bold">
            {t("headers.header1")}
          </h1>
          <button
            className="absolute left-0 rounded-lg border p-1 hover:bg-foreground-100"
            onClick={() => {
              let lang = i18n.resolvedLanguage === "en" ? "ch" : "en";
              i18n.changeLanguage(lang);
            }}
          >
            <IoLanguage size={26} />
          </button>
        </div>
      )}
    </>
  );
}

export default App;
