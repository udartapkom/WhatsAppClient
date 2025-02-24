import React from 'react';
import styles from './AuthForm.module.scss';
import { UniversalInput } from '../../ui-lib/input';

const AuthForm = () => (
  <form className={styles.Form}>
    <div>
      <UniversalInput
        label='Введите Instance'
        id='instance' />
    </div>
  </form>
);
export default AuthForm;
