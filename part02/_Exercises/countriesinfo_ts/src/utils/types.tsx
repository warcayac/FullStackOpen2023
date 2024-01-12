export type TChangeInputEvent = React.ChangeEvent<HTMLInputElement>;
export type TChangeInputFunction = (event: TChangeInputEvent) => void;

export type TFormSubmitEvent = React.FormEvent<HTMLFormElement>;
export type TFormSubmitFunction = (event: TFormSubmitEvent) => void;

export type TMouseButtonEvent = React.MouseEvent<HTMLButtonElement>;
export type TMouseButtonFunction = (event: TMouseButtonEvent) => void;

export type TJMap = Record<string, any>;
export type TJMapList = Array<TJMap>;

/* ------------------------------------------------------------------------------------------------ */

export type TCountry = {
  name: string,
  capital?: string,
  area?: number,
  languages?: string[],
  flagUrl?: string,
  code?: string,
}
export type TCountryList = Array<TCountry>;

export type TResult = TCountry|TCountryList|string;

export type TWeather = {
  temperature?: number,
  wind?: number,
  iconUrl?: string,
}

export type TWeatherList = Array<TWeather>;