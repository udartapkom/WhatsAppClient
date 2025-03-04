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

export const request = (url: string, config?: RequestInit) => fetch(`${process.env.API || api}${url}`, {
  ...config,
  credentials: 'include',
}).then(checkResponse);
export const sendMessage = (messageData: any) => request('1103196009/sendMessage/a4fd76e8556240cc9e466a9786bc025c1d188fcafbe6480a8f', {
  method: 'POST',
  headers: new Headers([
    ['Content-Type', 'application/json'],
  ]),
  body: JSON.stringify(messageData),
});
