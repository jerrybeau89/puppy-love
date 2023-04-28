import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from "@apollo/client";

import Login from './components/Login';
  const httpLink = createHttpLink({
    uri: "/graphql",
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
            </Routes>
        </BrowserRouter>
        </ApolloProvider>
    );
}
export default App;