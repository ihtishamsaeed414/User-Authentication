import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function RedirectAuthenticatedUserLayout() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />; // Render nested routes here
}

export default RedirectAuthenticatedUserLayout;
