import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function RedirectAuthenticatedUserLayout() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default RedirectAuthenticatedUserLayout;
