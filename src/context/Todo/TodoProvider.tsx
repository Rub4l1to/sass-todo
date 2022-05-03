import React, { useReducer } from 'react';

//* Interfaces
import { ToDo } from 'interfaces/Todo';

import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';

export interface TodoState {
  list: ToDo[];
}

const INITIAL_STATE: TodoState = {
  list: [],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const handleTodo = (todo: ToDo) => {
    dispatch({ type: 'ADD_TODO', payload: todo });
  };

  return (
    <TodoContext.Provider
      value={{
        ...state,

        //* Methods
        handleTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
