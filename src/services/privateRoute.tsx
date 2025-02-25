import React, { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface IPrivateRoute {
  path: string;
  loggedIn: boolean;
}
// path - это путь куда юзер отправляется если он неавторизован
const PrivateRoute: FC<IPrivateRoute> = (props) => {
  const { loggedIn, path } = props;
  return loggedIn ? <Outlet /> : <Navigate to={path} />;
};
export default PrivateRoute;
