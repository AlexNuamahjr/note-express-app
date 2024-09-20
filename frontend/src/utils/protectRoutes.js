import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import { useEffect } from "react";

const ProtectedRoute = ({ Children }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  //   if user is not authenticated
  if (!isAuthenticated) return null;
  // if user is authenticated
  return Children;
};
export default ProtectedRoute;
