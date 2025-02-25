import { ChangeEvent, useCallback, useState } from 'react';

type Values = Record<string, string>;
const handleChangeValues = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [values, setValues] = useState<Values>({});
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const resetForm = useCallback((
    newValues: Values = {},
  ) => {
    setValues(newValues);
  }, [setValues]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  return { values, resetForm, handleChange };
};
export default handleChangeValues;
