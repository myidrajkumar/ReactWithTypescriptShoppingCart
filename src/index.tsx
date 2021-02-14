import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={client}>
       <App />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root')
);