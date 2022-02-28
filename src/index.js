import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache , HttpLink } from "@apollo/client";
import './index.css';
import App from './App';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000'
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});




ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

