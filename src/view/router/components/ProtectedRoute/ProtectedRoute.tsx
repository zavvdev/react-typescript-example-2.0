import { Navigate, Outlet } from "react-router-dom";
import { ProtectedRouteProps } from "view/router/components/ProtectedRoute/ProtectedRoute.types";

export function ProtectedRoute(props: ProtectedRouteProps) {
  const {
    isAllowed,
    redirectPath,
    children,
  } = props;

  const render = () => {
    let result = <Outlet />;
    if (!isAllowed) {
      result = <Navigate to={redirectPath} replace />;
    } else if (children) {
      result = children;
    }
    return result;
  };

  return render();
}
