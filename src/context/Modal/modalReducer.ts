import { ModalState } from './ModalProvider';

//* Interface
import { Modal } from 'interfaces/Modal';
import { ToDo } from '../../interfaces/Todo';

type modalAction =
  | {
      type: 'TOGGLE_MODAL';
    }
  | {
      type: 'MODE_EDIT_MODAL';
      payload: ToDo;
    };

export const modalReducer = (state: ModalState, action: modalAction): ModalState => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        show: !state.show,
      };
    case 'MODE_EDIT_MODAL':
      return {
        ...state,
        show: !state.show,
        data: action.payload,
      };

    default:
      return state;
  }
};
