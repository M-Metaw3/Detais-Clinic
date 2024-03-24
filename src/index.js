import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  outlet
} from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router>
    <ChakraProvider>
    <App 
      />
    </ChakraProvider>
    </Router>
    </QueryClientProvider>
  </React.StrictMode>
);


