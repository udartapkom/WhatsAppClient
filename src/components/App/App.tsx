import React from 'react';
import {
  Route, Routes, useLocation,
} from 'react-router';
import styles from './App.module.scss';
import { Auth, Error } from '../../pages/index';

const App = () => {
  const location = useLocation();
  // const background = location.state && location.state.background;
  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  );
};
export default App;
