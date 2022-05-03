import React, { createContext } from 'react';

//* Interfaces
import { ToDo } from 'interfaces/Todo';

interface TodoContextProps {
  list: ToDo[];

  //* Methods
  handleTodo: (todo: ToDo) => void;
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);
