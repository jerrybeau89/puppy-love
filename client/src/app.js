import React from "react";
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import { setContext } from '@apollo/client/link/context';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from "@apollo/client";

// import Login from './components/Login';
  const httpLink = createHttpLink({
    //change it back later
    // uri: "/graphql"
    uri: "/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  


function App() {

  const location = useLocation();
    return (
      
    <ApolloProvider client={client}>
       <div className=''>
          <Header />
            <Outlet location={location} key={location.pathname} />
          <Footer />
        </div>
    
       
    </ApolloProvider>
    );
}
export default App;