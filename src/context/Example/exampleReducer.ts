import { SearchState } from './ExampleProvider';

type ExampleAction = {
  type: 'EXAMPLE_ACTION';
  payload: string;
};

export const exampleReducer = (state: SearchState, action: ExampleAction): SearchState => {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return {
        ...state,
        example: 'Example',
      };

    default:
      return state;
  }
};
