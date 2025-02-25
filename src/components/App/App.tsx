import React from 'react';
import {
  Route, Routes,
} from 'react-router';
import PrivateRoute from '../../services/privateRoute';
import styles from './App.module.scss';
import {
  Auth,
  Error,
  CreateChat,
  Main,
} from '../../pages/index';

const App = () => (
  <div className={styles.App}>
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route
        element={
          <PrivateRoute path='/' loggedIn />
        }>
        <Route element={<CreateChat />} path='/create' />
      </Route>
      <Route
        element={
          <PrivateRoute path='/' loggedIn />
        }>
        <Route element={<Main />} path='/chat' />
      </Route>
      <Route path='/*' element={<Error />} />
    </Routes>
  </div>
);
export default App;
