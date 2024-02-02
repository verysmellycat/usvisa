import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavigationBar";
import Submission from "./pages/Submission";
import NotFound from "./pages/NotFound";
import UserGroup from "./components/UserGroup";
import Instruction from "./pages/Instruction";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto">
      <BrowserRouter>
        <NavBar></NavBar>
        <h1 className="font-semibold text-center text-2xl mt-3">
          {t("headers.header1")}
        </h1>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/submit" element={<Submission />}></Route>
          <Route path="/user_group" element={<UserGroup />}></Route>
          <Route path="/instruction" element={<Instruction />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
