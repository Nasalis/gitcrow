import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { client } from './lib/apollo'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </ApolloProvider>
  </React.StrictMode>
)
