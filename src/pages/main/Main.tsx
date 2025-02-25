import React from 'react';
import styles from './Main.module.scss';
import { UniversalInput } from '../../ui-lib/input';

const Main = () => {
  const sendMessage = () => {
    console.log('отправлено');
  };

  return (
    <main className={styles.main}>
      <div className={styles.main__list}>
        список контактов
      </div>
      <div className={styles.main__messages}>
        <div>
          <p>лента сообщений</p>
          <div className={styles.main__blockMessages}>блок сообщений</div>
        </div>
        <UniversalInput id='message' />
      </div>

    </main>
  );
};
export default Main;
