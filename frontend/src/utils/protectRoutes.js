import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import { useEffect } from "react";

const ProtectedRoute = ({ Children }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     return navigate("/");
  //   }
  // }, [isAuthenticated, navigate]);
  // //   if user is not authenticated
  // if (!isAuthenticated) return null;
  // if user is authenticated
  return Children;
};
export default ProtectedRoute;
