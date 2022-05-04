import React, { useReducer } from 'react';

import { ModalContext } from './ModalContext';
import { modalReducer } from './modalReducer';
import { ToDo } from '../../interfaces/Todo';

export interface ModalState {
  show: boolean;
  data?: ToDo;
}

const INITIAL_STATE: ModalState = {
  show: false,
  data: {} as ToDo,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ModalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(modalReducer, INITIAL_STATE);

  const handleModal = () => {
    dispatch({ type: 'TOGGLE_MODAL' });
  };

  const handleModalData = (todo: ToDo) => {
    dispatch({ type: 'MODE_EDIT_MODAL', payload: todo });
  };

  return (
    <ModalContext.Provider
      value={{
        ...state,

        //* Methods
        handleModal,
        handleModalData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
