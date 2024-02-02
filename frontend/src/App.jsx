import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavigationBar";
import Submission from "./pages/Submission";
import NotFound from "./pages/NotFound";
import UserCommunity from "./components/UserCommunity";
import Instruction from "./pages/Instruction";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { IoLanguage } from "react-icons/io5";

function App() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto">
      <BrowserRouter>
        <NavBar></NavBar>
        <div className="flex justify-center items-center mt-3 mx-auto gap-x-5 w-5/6 sm:w-3/5">
          <h1 className="font-semibold text-2xl">{t("headers.header1")}</h1>
          <button
            onClick={() => {
              let lang = i18n.resolvedLanguage === "en" ? "ch" : "en";
              i18n.changeLanguage(lang);
            }}
          >
            <IoLanguage size={28} className="border-2" />
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/submit" element={<Submission />}></Route>
          <Route path="/community" element={<UserCommunity />}></Route>
          <Route path="/instruction" element={<Instruction />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
