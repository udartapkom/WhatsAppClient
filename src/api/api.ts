import { baseUrl as api } from '../constants/baseUrl';

const checkResponse = (res: Response) => {
  if (!res.ok) {
    return res.json().then((json) => {
      throw json;
    });
    // throw new Error('Ошибка');
  }
  return res.json();
};

const request = (url: string, config?: RequestInit) => fetch(`${process.env.API || api}${url}`, {
  ...config,
  credentials: 'include',
}).then(checkResponse);
export const sendMessage = (messageData: any) => request('/send', {
  method: 'POST',
  headers: new Headers([
    ['Content-Type', 'application/json'],
  ]),
  body: JSON.stringify(messageData),
});
