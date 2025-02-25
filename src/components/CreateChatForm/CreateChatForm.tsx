import React, { SyntheticEvent } from 'react';
import styles from './CreateChatForm.module.scss';
import HandleChangeValues from '../../services/HandleChangeValues';
import { UniversalInput } from '../../ui-lib/input';
import { UniversalButton } from '../../ui-lib/buttons';

const CreateChatForm = () => {
  const { values, resetForm, handleChange } = HandleChangeValues();
  const onCreateChat = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(values);
    resetForm({});
  };

  return (
    <form className={styles.Form} onSubmit={onCreateChat}>
      <h2 className={styles.Form_header}>Создать чат</h2>
      <UniversalInput
        name='telephone'
        value={values.telephone || ''}
        id='telephone'
        placeholder='Введите номер телефона'
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
