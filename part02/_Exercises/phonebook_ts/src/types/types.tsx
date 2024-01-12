export type TInputChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type TFormSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => void;
export type TMouseButtonEvent = (event: React.MouseEvent<HTMLButtonElement>) => void;

/* ------------------------------------------------------------------------------------------------ */

export type TBookEntry = {
  name: string,
  phone: string,
  id?: string,
};

export type TBookEntryList = TBookEntry[];

