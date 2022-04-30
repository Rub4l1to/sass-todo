import React, { createContext } from 'react';

interface ExampleContextProps {}

export const ExampleContext = createContext<ExampleContextProps>({} as ExampleContextProps);
