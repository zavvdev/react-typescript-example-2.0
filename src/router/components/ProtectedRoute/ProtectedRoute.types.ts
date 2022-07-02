interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath: string;
  children?: JSX.Element;
}

export type { ProtectedRouteProps };
