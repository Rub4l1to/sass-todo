import React, { createContext } from 'react';

interface TodoContextProps {}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);
