import Header from "./components/Header";
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Auth/login/Login";
import Register from "./pages/Auth/signup/Signup";
import Home from "./pages/home/Home";
import RecycleBin from "./pages/bin/Bin";
import ResetPassword from "./pages/Auth/resetPassword/ResetPassword";
import Layout from "./components/Layout";
import ErrorPage from "./pages/error/404";
import EditProfile from "./pages/profile/Profile";
import ChangePassword from "./pages/Auth/changePassword/changePassword";
import ForgotPassword from "./pages/Auth/forgotPassword/ForgotPassword";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/bin" Component={RecycleBin} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
