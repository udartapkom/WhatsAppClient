import React, { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import styles from './AuthForm.module.scss';
import HandleChangeValues from '../../services/HandleChangeValues';
import { UniversalInput } from '../../ui-lib/input';
import { UniversalButton } from '../../ui-lib/buttons';

const AuthForm = () => {
  const { values, resetForm, handleChange } = HandleChangeValues();
  const navigation = useNavigate();
  const authUser = (event: SyntheticEvent) => {
    event.preventDefault();
    localStorage.setItem('idS', JSON.stringify(values));
    resetForm({});
    navigation('/create', { replace: true });
    const item = localStorage.getItem('idS');
    return item ? console.log(JSON.parse(item)) : null;
  };
  return (
    <form className={styles.Form} onSubmit={authUser}>
      <h3 className={styles.Form_header}>Вход в WhatsApp client</h3>
      <div>
        <UniversalInput
          name='apiUrl'
          value={values.apiUrl || ''}
          id='url'
          placeholder='apiUrl'
          onChange={handleChange} />
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
      <div className={styles.Form_container}>
        <p>Все необходимые параметры нужно взять </p>
        <Link to='https://console.green-api.com/instanceList'>
          здесь
        </Link>
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
