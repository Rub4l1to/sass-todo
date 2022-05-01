import { TodoState } from './TodoProvider';

//* Interface
import { ToDo } from 'interfaces/Todo';

type TodoAction =
  | {
      type: 'ADD_TODO';
      payload: ToDo;
    }
  | {
      type: 'EDIT_TODO';
      payload: ToDo;
    };

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
      };
    case 'EDIT_TODO':
      return {
        ...state,
      };

    default:
      return state;
  }
};
