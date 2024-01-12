import { PropsWithChildren, createContext, useContext, useState } from "react";

// Reference: https://claritydev.net/blog/typing-react-context-in-typescript


type TFetchingContext = {
  isFetching: boolean, 
  // setIsFetching: React.Dispatch<React.SetStateAction<boolean>>,
  setIsFetching: (value: boolean) => void,
}

export const FetchingContext = createContext<TFetchingContext|undefined>(undefined);

export const FetchingProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isFetching, setIsFetching] = useState(false);
 
  return (
    <FetchingContext.Provider value={{ isFetching, setIsFetching }}>
      {children}
    </FetchingContext.Provider>
  );
};

export const useFetchingContext = () => {
  const context = useContext(FetchingContext);

  if (!context) {
    throw new Error('useFetchingContext must be used inside the FetchingProvider');
  }

  return context;
}