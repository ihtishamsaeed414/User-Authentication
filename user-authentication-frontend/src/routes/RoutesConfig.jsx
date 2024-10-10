import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/DashboardPage";
import SignUpPage from "../pages/userAdmission/SignUpPage";
import { checkAuth } from "../pages/userAdmission/authSlice";
import EmailVerificationPage from "../pages/userAdmission/EmailVerificationPage";
import LoginPage from "../pages/userAdmission/LoginPage";
import ForgotPasswordPage from "../pages/userAdmission/ForgotPasswordPage";
import ResetPasswordPage from "../pages/userAdmission/ResetPasswordPage";
import LoadingSpinner from "../components/LoadingSpinner";
import RedirectAuthenticatedUser from "./RedirectAuthenticatedUser";
function RoutesConfig() {
  const dispatch = useDispatch();

  const isCheckingAuth = useSelector((state) => state.auth.isCheckingAuth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route element={<RedirectAuthenticatedUser />}>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      </Route>
      <Route path="/verify-email" element={<EmailVerificationPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default RoutesConfig;
