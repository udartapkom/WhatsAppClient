import { baseUrl as api } from '../constants/baseUrl';
import { TSendType, TDataToRecive, TDataToDelNotification } from '../types/types';

const checkResponse = (res: Response) => {
  if (!res.ok) {
    return res.json().then((json) => {
      throw json;
    });
    // throw new Error('Ошибка');
  }
  return res.json();
};

const request = (url: string, config?: RequestInit) => fetch(`${api}${url}`, {
  ...config,
  credentials: 'include',
}).then(checkResponse);
export const sendMessage = (messageData: TSendType) => request('/send', {
  method: 'POST',
  headers: new Headers([
    ['Content-Type', 'application/json'],
  ]),
  body: JSON.stringify(messageData),
});

export const reciveMessage = (dataToRecive: TDataToRecive) => request('/recive', {
  method: 'POST',
  headers: new Headers([
    ['Content-Type', 'application/json'],
  ]),
  body: JSON.stringify(dataToRecive),
});
export const delNotifications = (dataToDelNotification: TDataToDelNotification) => request('/del', {
  method: 'DELETE',
  headers: new Headers([
    ['Content-Type', 'application/json'],
  ]),
  body: JSON.stringify(dataToDelNotification),
});
