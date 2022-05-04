import React, { createContext } from 'react';

//* Interfaces
import { ToDo } from 'interfaces/Todo';

interface TodoContextProps {
  list: ToDo[];

  //* Methods
  handleTodo: (data: string) => void;
  handleEditTodo: (todo: ToDo) => void;
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);
