import React from 'react';
import {
  Route, Routes,
} from 'react-router';
import styles from './App.module.scss';
import { Auth, Error } from '../../pages/index';

const App = () => (
  <div className={styles.App}>
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route path='/*' element={<Error />} />
    </Routes>
  </div>
);
export default App;
