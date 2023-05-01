import React from "react";
import ReactDOM from "react-dom";
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'

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
    uri: "http://localhost:3001/graphql",
  });
  
  const client = new ApolloClient({
    link:httpLink,
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