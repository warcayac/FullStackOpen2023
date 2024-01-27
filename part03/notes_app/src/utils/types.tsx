export type TChangeInputEvent = React.ChangeEvent<HTMLInputElement>;
export type TChangeInputFunction = (event: TChangeInputEvent) => void;

export type TFormSubmitEvent = React.FormEvent<HTMLFormElement>;
export type TFormSubmitFunction = (event: TFormSubmitEvent) => void;

export type TMouseButtonEvent = React.MouseEvent<HTMLButtonElement>;
export type TMouseButtonFunction = (event: TMouseButtonEvent) => void;

export type TJMap = Record<string, any>;
export type TJMapList = Array<TJMap>;

/* ------------------------------------------------------------------------------------------------ */

export type TNote = {
  content: string,
  important: boolean,
  id?: string,        // equivalente -> id: string|undefined
}

export type TNoteList = TNote[]
