import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// auth
import LandingPage from "./auth/LandingPage";
import SignupEmail from "./auth/SignupEmail";
import SignupPassword from "./auth/SignupPassword";
import SignupComplete from "./auth/SignupComplete";
import Login from "./auth/Login";
import DeleteAccount from "./auth/DeleteAccount";

// pages

import DetailPage from "./pages/DetailPage";
import SettingPage from "./pages/SettingPage";
import FixPage from "./pages/FixPage";
import SignupTerms from "./auth/SignupTerms";

import Search from "./main/Search";
import Main2 from "./main/Main2";

import MapPage from "./pages/MapPage";
import Main from "./main/Main";

function App() {
  return (
    <div className="m-auto h-[912px] max-w-[412px] bg-[#FBFBFB] border-2 border-black">
      <BrowserRouter>
        <Routes>
          {/* 인증/회원가입 관련 */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup/terms" element={<SignupTerms />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="signup/terms" element={<SignupTerms />} />
          <Route path="/main" element={<Main />} />
          <Route path="signup/terms" element={<SignupTerms />} />
          <Route path="/signup/email" element={<SignupEmail />} />
          <Route path="/signup/password" element={<SignupPassword />} />
          <Route path="/signup/complete" element={<SignupComplete />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          {/* 메인 및 기타 페이지 */}
          <Route path="/main2" element={<Main2 />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/fix" element={<FixPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/main/search" element={<Search />} />
          <Route path="/search" element={<Search />} />

          <Route path="/detail" element={<DetailPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/fix" element={<FixPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
