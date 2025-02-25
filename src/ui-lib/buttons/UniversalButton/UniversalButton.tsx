import React from 'react';
import styles from './UniversalButton.module.scss';

interface IUniversalButton extends React.ComponentPropsWithoutRef<'button'> {
  isFilled?: boolean;
  width?: string | number;
  height?: string | number;
  className?: string;
  fontSize?: string | number;
}

const UniversalButton: React.FC<IUniversalButton> = ({
  width,
  height,
  isFilled,
  type = 'submit',
  className = '',
  fontSize,
  ...rest
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    style={{
      width: `${String(width)}px`,
      height: `${String(height)}px`,
      fontSize: `${String(fontSize)}px`,
    }}
    className={`${isFilled ? styles.filledButton : styles.emptyButton} ${className}`}
    {...rest} />
);

export default UniversalButton;
