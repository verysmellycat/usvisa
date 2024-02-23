import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import Submission from "./pages/Submission";
import NotFound from "./pages/NotFound";
import UserCommunity from "./pages/UserCommunity";
import Tutorial from "./pages/Tutorial";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { IoLanguage } from "react-icons/io5";

function MainContent() {
  const { t } = useTranslation();
  const location = useLocation();
  const isNotProductPage = location.pathname !== "/product";
  return (
    <div className="mx-auto mt-3 flex w-5/6 flex-col md:w-2/3">
      {isNotProductPage && (
        <>
          <h1 className="text-center text-2xl font-semibold">
            {t("headers.header1")}
          </h1>
          <button
            className="self-end"
            onClick={() => {
              let lang = i18n.resolvedLanguage === "en" ? "ch" : "en";
              i18n.changeLanguage(lang);
            }}
          >
            <IoLanguage size={26} />
          </button>
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/submit" element={<Submission />}></Route>
        <Route path="/community" element={<UserCommunity />}></Route>
        <Route path="/tutorial" element={<Tutorial />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <NavBar />
        <MainContent />
      </div>
    </BrowserRouter>
  );
}

export default App;
