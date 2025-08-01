import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { ProgramsProvider } from './hooks/use-programs';

const queryClient = new QueryClient();
const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_DIGIFORMA_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
  headers: {"Authorization": `Bearer ${import.meta.env.VITE_DIGIFORMA_GRAPHQL_TOKEN}`}
})

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={apolloClient}>
    <ProgramsProvider>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <App />
      </StrictMode>
    </QueryClientProvider>
    </ProgramsProvider>
  </ApolloProvider>
)
