import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/login/Login";
import Register from "./pages/Auth/signup/Signup";
import Home from "./pages/home/Home";
import RecycleBin from "./pages/bin/Bin";
import ResetPassword from "./pages/Auth/resetPassword/ResetPassword";
import EditProfile from "./pages/profile/Profile";
import ChangePassword from "./pages/Auth/changePassword/changePassword";
import ForgotPassword from "./pages/Auth/forgotPassword/ForgotPassword";
import Settings from "./pages/settings/Settings";
import EmailConfirmation from "./pages/Auth/emailComfirmation/emailComfirmation";
import EmailVerification from "./pages/Auth/emailVerification/emailVerification";
import { AuthProvider } from "./utils/auth";
import ProtectedRoute from "./utils/protectRoutes";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/bin" element={<ProtectedRoute><RecycleBin /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
          <Route path="/change-password" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/email-confirmation" element={<EmailConfirmation />} />
          <Route path="/verify-email" element={<EmailVerification />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
