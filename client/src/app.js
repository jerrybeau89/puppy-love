import Home from './pages/Home'
import Login from './components/Login';
import Signup from './components/Signup';
import Filter from './pages/Filter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


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
    return (
    <ApolloProvider client={client}>
      
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />} />
                <Route path="/filter" element={<Filter/>}/>
                
            </Routes>
        </BrowserRouter>
        </ApolloProvider>
    );
}
export default App;