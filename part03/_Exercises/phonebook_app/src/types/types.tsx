export type TInputChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type TFormSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => void;
export type TMouseButtonEvent = (event: React.MouseEvent<HTMLButtonElement>) => void;

export type TJMap = Record<string, any>;
export type TJMapList = Array<TJMap>;

/* ------------------------------------------------------------------------------------------------ */

export type TBookEntry = {
  name: string,
  number: string,
  id?: string,
};

export type TBookEntryList = TBookEntry[];

