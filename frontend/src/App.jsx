import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import Submission from "./pages/Submission";
import NotFound from "./pages/NotFound";
import UserCommunity from "./pages/UserCommunity";
import Tutorial from "./pages/Tutorial";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { IoLanguage } from "react-icons/io5";
import { AiFillNotification } from "react-icons/ai";

function App() {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <div className="flex items-center justify-center gap-x-2 w-full sticky top-0 z-30 bg-white border-b py-3">
        <div className="shrink-0">
          <AiFillNotification />
        </div>
        <p className="font-medium text-center">{t("notification")}</p>
      </div>
      <div className="container mx-auto">
        <NavBar />
        <div className="flex flex-col mx-auto mt-3 w-5/6 md:w-2/3">
          <h1 className="font-semibold text-2xl text-center">
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
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/submit" element={<Submission />}></Route>
            <Route path="/community" element={<UserCommunity />}></Route>
            <Route path="/tutorial" element={<Tutorial />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
