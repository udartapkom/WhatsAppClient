import React, { SyntheticEvent, useEffect, useState } from 'react';
import styles from './Main.module.scss';
import { sendMessage } from '../../api/api';
import { TSendType, TTel, TApiTokenInstance } from '../../types/types';
import { UniversalInput } from '../../ui-lib/input';
import { SendButton } from '../../ui-lib/buttons';

const Main = () => {
  const [messageData, setMessageData] = useState<TSendType>(
    {
      apiTokenInstance: '', 
      chatId: '', 
      idInstance: '', 
      apiUrl: '', 
    },
  );

  const dataCollector = () => {
    const itemTel = localStorage.getItem('telephone');
    const itemIdS = localStorage.getItem('idS');
    const tel:TTel = itemTel ? JSON.parse(itemTel.toString()) : null;
    const tokens:TApiTokenInstance = itemIdS ? JSON.parse(itemIdS.toString()) : null;

    setMessageData({
      apiTokenInstance: tokens.token,
      chatId: tel.telephone,
      idInstance: tokens.idInstance,
      apiUrl: tokens.apiUrl,
    });
  };
  const sendMessageHandle = (event: SyntheticEvent) => {
    event.preventDefault();
    dataCollector();
  };
  useEffect(() => {
    console.log(messageData);
  }, [messageData]);
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
        <form className={styles.main__input} onSubmit={sendMessageHandle}>
          <UniversalInput 
            id='message'
            placeholder='Введите сообщение (только текст)' />
          <SendButton>
            отправить
          </SendButton>
        </form>
      </div>
    </main>
  );
};
export default Main;
