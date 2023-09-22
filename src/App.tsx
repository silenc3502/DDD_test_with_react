import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import BoardRoutes from './board/routes/BoardRoutes';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    }
  }
})

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <BoardRoutes/>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;