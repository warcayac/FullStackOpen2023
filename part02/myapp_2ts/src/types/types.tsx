export type TInputChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

export type TFormSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => void;

export type TButtonMouseEvent = (event: React.MouseEvent<HTMLButtonElement>) => void;

export type TNote = {
  content: string,
  important: boolean,
  id?: string,        // equivalente -> id: string|undefined
}

export type TNoteList = TNote[]
