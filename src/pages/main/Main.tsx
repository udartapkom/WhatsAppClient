/* eslint-disable */
import React, { SyntheticEvent, useEffect, useMemo, useState } from 'react';
import styles from './Main.module.scss';
import { sendMessage, reciveMessage, delNotifications } from '../../api/api';
import {
  TTel,
  TApiTokenInstance,
} from '../../types/types';
import HandleChangeValues from '../../services/HandleChangeValues';
import { UniversalInput } from '../../ui-lib/input';
import { SendButton } from '../../ui-lib/buttons';

const Main = () => {
  const [recivedMessages, setRecivedMessages] = useState<string[]>([]);
  const [receipMessageId, setReceipMessageId] = useState<number>(1);
  const { values, resetForm, handleChange } = HandleChangeValues();
  const sendMessageHandle = (event: SyntheticEvent) => {
    event.preventDefault();
    const itemTel = localStorage.getItem('telephone');
    const itemIdS = localStorage.getItem('idS');
    const tel:TTel = itemTel ? JSON.parse(itemTel.toString()) : null;
    const tokens:TApiTokenInstance = itemIdS ? JSON.parse(itemIdS.toString()) : null;
    sendMessage({
      apiUrl: tokens.apiUrl,
      idInstance: tokens.idInstance,
      apiTokenInstance: tokens.token,
      chatId: tel.telephone,
      message: values.message,
    }).then((res) => {
      resetForm();
      return console.log(res);
    }).catch((error) => {
      console.log(error);
    });
  };
  useEffect(() => {
    const reciveTime = setInterval(() => {
      const itemToRecive = localStorage.getItem('idS');
      const tokens:TApiTokenInstance = itemToRecive ? JSON.parse(itemToRecive.toString()) : null;
      reciveMessage({
        apiTokenInstance: tokens.token,
        apiUrl: tokens.apiUrl,
        idInstance: tokens.idInstance,
        reciveTimeoute: 5000,
      }).then((res) => {
        const receip:number = res.receiptId;
        setReceipMessageId(receip);
        let mesData: any | undefined;
        if (res.body.typeWebhook === 'outgoingAPIMessageReceived' ) {
          mesData = res.body.messageData.extendedTextMessageData.text;
          setRecivedMessages([...recivedMessages, mesData]);
          setReceipMessageId(receip);
        } else if (res.body.typeWebhook === 'outgoingMessageReceived'){
          mesData = res.body.messageData.textMessageData.textMessage;
          setRecivedMessages([...recivedMessages, mesData]);
        }
        setReceipMessageId(receip);
      }).catch((error) => {
        console.log(error);
      });
    }, 5000);
    return () => clearInterval(reciveTime);
  }, []);

  useEffect(() => {
    const itemToReciveMes = localStorage.getItem('idS');
    const tokens:TApiTokenInstance = itemToReciveMes ? JSON.parse(itemToReciveMes.toString()) : null;
    delNotifications({
      apiTokenInstance: tokens.token,
      apiUrl: tokens.apiUrl,
      idInstance: tokens.idInstance,
      receiptId: receipMessageId,
    });
  }, [receipMessageId]);

  return (
    <main className={styles.main}>
      <div className={styles.main__list}>
        список контактов
      </div>
      <div className={styles.main__messages}>
        <div>
          <p>лента сообщений</p>
          <div className={styles.main__blockMessages}>
            { recivedMessages && recivedMessages.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
        <form className={styles.main__input} onSubmit={sendMessageHandle}>
          <UniversalInput
            name='message'
            id='message'
            placeholder='Введите сообщение (только текст)' 
            onChange={handleChange}
            value={values.message || ''} />
          <SendButton>
            отправить
          </SendButton>
        </form>
      </div>
    </main>
  );
};
export default Main;
