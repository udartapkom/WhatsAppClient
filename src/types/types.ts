type TCommon = {
  apiUrl: string;
  idInstance: string;
  apiTokenInstance: string;
};
export type TSendType = TCommon & {
  chatId: string;
  message: string;
};
export type TTel = {
  telephone: string;
};
export type TApiTokenInstance = {
  token: string;
  idInstance: string;
  apiUrl: string;
};
// типы для API
export type TDataToRecive = TCommon & {
  reciveTimeoute: number;
};
export type TDataToDelNotification = TCommon & {
  receiptId: number;
};
