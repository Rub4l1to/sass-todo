import React, { createContext } from 'react';

interface ModalContextProps {
  show: boolean;
  data?: string;

  //* Methods
  handleModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);
