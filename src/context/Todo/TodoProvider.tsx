import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
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

  const handleTodo = (data: string) => {
    const id: string = uuid();
    dispatch({ type: 'ADD_TODO', payload: { id, data } });
  };

  const handleEditTodo = (todo: ToDo) => {
    dispatch({ type: 'EDIT_TODO', payload: todo });
  };

  return (
    <TodoContext.Provider
      value={{
        ...state,

        //* Methods
        handleTodo,
        handleEditTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
