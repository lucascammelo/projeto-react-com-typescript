import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const autenticado = localStorage.getItem('token');
  return autenticado ? children : <Navigate to="/Login" />;
};

export default PrivateRoute;
