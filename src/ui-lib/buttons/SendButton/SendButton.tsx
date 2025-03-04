import React from 'react';
import styles from './SendButton.module.scss';

const SendButton = ({ ...rest }) => (
  <button
    className={styles.sendButton}
    type='submit'
    {...rest} />
);
export default SendButton;
