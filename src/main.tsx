import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { NextUIProvider } from '@nextui-org/react';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

let queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
