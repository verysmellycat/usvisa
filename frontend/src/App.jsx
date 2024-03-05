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
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";

function App() {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <NavBar />
        <div className="mx-auto mt-3 flex w-5/6 flex-col gap-y-3 md:w-2/3">
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
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/submission" element={<Submission />}></Route>
            <Route path="/confirmation" element={<Confirmation />}></Route>
            <Route path="/community" element={<UserCommunity />}></Route>
            <Route path="/tutorial" element={<Tutorial />}></Route>
            <Route path="/pay" element={<Payment />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
