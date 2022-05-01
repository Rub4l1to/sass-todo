import React, { useReducer } from 'react';

import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';

export interface TodoState {}

const INITIAL_STATE: TodoState = {};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  return (
    <TodoContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
