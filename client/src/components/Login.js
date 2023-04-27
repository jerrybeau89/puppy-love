// import React, { useState } from 'react';
// // import { LOGIN } from "../utils/mutations";
// // import { useMutation } from "@apollo/client";
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Email: ${email}, Password: ${password}`);
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
// import { AuthAlert } from "../components/AuthAlert";
// import { Link } from "react-router-dom"
// import {
//   Box,
//   Text,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
// } from "@chakra-ui/react";
import Auth from "../utils/auth"
export default function Login() {
  const [showAlert, setShowAlert] = useState(false);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formState;
  // get the login mutation function from useMutation
  const [login] = useMutation(LOGIN);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login({
        variables: {
          email,
          password,
        },
      });
      // get the token from the response and save to localStorage
      Auth.login(response.data.login.token);
    } catch (err) {
      setShowAlert(true);
    }
  };

  return (
    <h1>this is login </h1>
    // <Box
    //   maxW="sm"
    //   mx="auto"
    //   mt="8"
    //   p="6"
    //   bg="white"
    //   borderRadius="md"
    //   boxShadow="md"
    // >
    //   <Text fontSize="3xl" fontWeight="bold" mb="6" textAlign="center">
    //     Log in to your account
    //   </Text>
    //   <form onSubmit={handleSubmit}>
    //     <FormControl mb="4">
    //       <FormLabel>Email address</FormLabel>
    //       <Input
    //         type="email"
    //         name="email"
    //         placeholder="Email"
    //         value={email}
    //         onChange={handleChange}
    //       />
    //     </FormControl>
    //     <FormControl mb="6">
    //       <FormLabel>Password</FormLabel>
    //       <Input
    //         type="password"
    //         name="password"
    //         placeholder="Password"
    //         value={password}
    //         onChange={handleChange}
    //       />
    //     </FormControl>
    //     <Button type="submit" colorScheme="blue" size="lg" w="full">
    //       Log in
    //     </Button>
    //   </form>
    //   <Text mt="4" textAlign="center">
    //     Don't have an account?{" "}
    //     <Link color="blue.500" href="/signup">
    //       Sign up
    //     </Link>
    //   </Text>
    //   {showAlert && <AuthAlert setShowAlert={setShowAlert} />}
    // </Box>
  );
}
