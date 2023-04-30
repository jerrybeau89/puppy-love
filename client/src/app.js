
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
// import Messenger from './pages/messenger/Messenger'
// import Login from './components/Login';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from "@apollo/client";


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
      
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                </Routes>

                {/* <Routes>
                <Route path='/' element={<Login/>} />
                </Routes>

                <Routes>
                 <Route path='/' element={<Messenger/>} />
                 </Routes> */}

            
            
        </Router>
        </ApolloProvider>
    );
}
export default App;