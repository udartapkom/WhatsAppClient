import React, { SyntheticEvent } from 'react';
import styles from './AuthForm.module.scss';
import HandleChangeValues from '../../services/HandleChangeValues';
import { UniversalInput } from '../../ui-lib/input';
import { UniversalButton } from '../../ui-lib/buttons';

const AuthForm = () => {
  const { values, resetForm, handleChange } = HandleChangeValues();
  const authUser = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(values);
    resetForm({});
  };
  return (
    <form className={styles.Form} onSubmit={authUser}>
      <h3 className={styles.Form_header}>Вход в WhatsApp client</h3>
      <div>
        <UniversalInput
          name='idInstance'
          value={values.idInstance || ''}
          id='instance'
          placeholder='idInstance'
          onChange={handleChange} />
        <UniversalInput
          name='token'
          value={values.token || ''}
          id='token'
          placeholder='apiTokenInstance'
          onChange={handleChange} />
      </div>
      <UniversalButton
        width='320'
        height='36'>
        Войти
      </UniversalButton>
    </form>
  );
};
export default AuthForm;
