import React, { createContext } from 'react';

//* Interfaces
import { ToDo } from 'interfaces/Todo';

interface ModalContextProps {
  show: boolean;
  data?: ToDo;

  //* Methods
  handleModal: () => void;
  handleModalData: (todo: ToDo) => void;
}

export const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);
