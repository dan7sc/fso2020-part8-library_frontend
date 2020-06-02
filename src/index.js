import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider, ApolloClient, InMemoryCache, HttpLink
} from '@apollo/client'
import App from './App';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    url: 'http:localhost:4000'
  })
})

ReactDOM.render(
  <ApolloProvider  client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);