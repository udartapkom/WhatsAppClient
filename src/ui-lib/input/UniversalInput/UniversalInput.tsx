import React, { FC } from 'react';
import styles from './UniversalInput.module.scss';

interface IUniversalInput extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  type?: string;
  placeholder?: string;
  id: string;
  customStyle?: string;
  error?: string;
}

const UniversalInput: FC<IUniversalInput> = ({
  label = '',
  id = '',
  type = 'text',
  placeholder = '',
  customStyle = '',
  error = '',
  ...rest
}) => (
  <div className={styles.Container}>
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
    <div className={styles.inputContainer}>
      <input
        id={id}
        className={`${error ? styles.input_error : ''} ${styles.input}`}
        placeholder={placeholder}
        type={type}
        {...rest} />
    </div>
    {error && <div className={styles.error}>{error}</div>}
  </div>
);
export default UniversalInput;
