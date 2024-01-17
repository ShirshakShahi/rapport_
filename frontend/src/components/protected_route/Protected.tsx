import { Navigate, useLocation } from "react-router-dom";
import { getLocalStorage } from "../../helpers/frontend_helpers";

interface ProtectedProps {
  children: React.ReactNode;
}

const Protected = ({ children }: ProtectedProps) => {
  const token = getLocalStorage("token");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
};

export default Protected;
