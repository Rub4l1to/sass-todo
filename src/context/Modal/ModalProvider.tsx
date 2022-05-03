import React, { useReducer } from 'react';

import { ModalContext } from './ModalContext';
import { modalReducer } from './modalReducer';

export interface TodoState {
  show: boolean;
  data?: string;
}

const INITIAL_STATE: TodoState = {
  show: false,
  data: '',
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ModalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(modalReducer, INITIAL_STATE);

  const handleModal = () => {
    dispatch({ type: 'TOGGLE_MODAL' });
  };

  return (
    <ModalContext.Provider
      value={{
        ...state,

        //* Methods
        handleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
