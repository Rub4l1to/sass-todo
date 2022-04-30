import React, { useReducer } from 'react';

import { ExampleContext } from './ExampleContext';
import { exampleReducer } from './exampleReducer';

export interface SearchState {}

const INITIAL_STATE: SearchState = {};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ExampleProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(exampleReducer, INITIAL_STATE);

  return (
    <ExampleContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </ExampleContext.Provider>
  );
};
