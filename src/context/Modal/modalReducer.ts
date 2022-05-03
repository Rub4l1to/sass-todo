import { TodoState } from './ModalProvider';

//* Interface
import { Modal } from 'interfaces/Modal';

type modalAction =
  | {
      type: 'TOGGLE_MODAL';
    }
  | {
      type: 'MODE_EDIT_MODAL';
      payload: string;
    };

export const modalReducer = (state: TodoState, action: modalAction): TodoState => {
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
