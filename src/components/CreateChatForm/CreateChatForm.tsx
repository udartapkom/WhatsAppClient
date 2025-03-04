import React, { SyntheticEvent } from 'react';
import styles from './CreateChatForm.module.scss';
import HandleChangeValues from '../../services/HandleChangeValues';
import { UniversalInput } from '../../ui-lib/input';
import { UniversalButton } from '../../ui-lib/buttons';
import { sendMessage } from '../../api/api';

const CreateChatForm = () => {
  const { values, resetForm, handleChange } = HandleChangeValues();

  const anyData = {
    chatId: '79281641563@c.us',
    message: 'Тестовая проверка API!',
  };

  const onCreateChat = (event: SyntheticEvent) => {
    event.preventDefault();
    /* localStorage.setItem('idChat', JSON.stringify(values));
    const item = localStorage.getItem('idChat');
    return item ? console.log(JSON.parse(item)) : null;
    console.log(values); */
    sendMessage(anyData).then((r) => console.log(r)).catch((error) => console.log(error));
    // resetForm({});
  };

  return (
    <form className={styles.Form} onSubmit={onCreateChat}>
      <h2 className={styles.Form_header}>Создать чат</h2>
      <UniversalInput
        name='telephone'
        value={values.telephone || ''}
        id='telephone'
        placeholder='Номер в формате: 71231231212'
        onChange={handleChange} />
      <UniversalButton
        width='320'
        height='36'>
        Создать
      </UniversalButton>
    </form>
  );
};
export default CreateChatForm;
