// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirm, setPasswordConfirm] = useState('');

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('/register', {
//         email,
//         username,
//         password,
//         passwordConfirm,
//       });
//       console.log(res.data);
//     } catch (err) {
//       console.log(err.response.data);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Username"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <input
//         type="password"
//         value={passwordConfirm}
//         onChange={(e) => setPasswordConfirm(e.target.value)}
//         placeholder="Confirm Password"
//       />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../utils/mutations";
import { AuthAlert } from "./AuthAlert";

import Auth from "../utils/auth";

export default function Signup() {
  const [showAlert, setShowAlert] = useState(false);
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formState;
  // get the signup mutation function from useMutation
  const [signup] = useMutation(SIGNUP);

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
      const response = await signup({
        variables: {
          username,
          email,
          password,
        },
      });
      // get the token from the response and save to localStorage
      Auth.login(response.data.signup.token);
    } catch (err) {
      setShowAlert(true);
    }
  };

  return (
    <Box
      w="300px"
      mx="auto"
      my="4"
      p="3"
      display="flex"
      flexDirection="column"
      gap="2"
      borderRadius="sm"
      boxShadow="md"
      position="relative"
      borderWidth="1px"
      borderColor="gray.200"
    >
      <Box>
        <Heading size="md" mb="2">
          <b>Create a new account</b>
        </Heading>
      </Box>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
          name="username"
          type="username"
          placeholder="testuser"
          value={username}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          name="email"
          type="email"
          placeholder="test@email.com"
          value={email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          type="password"
          placeholder="should have 6+ characters"
          value={password}
          onChange={handleChange}
        />
      </FormControl>
      <Button mt="1" onClick={handleSubmit}>
        Sign up
      </Button>
      <Text fontSize="sm" alignSelf="center" mt="2">
        Already have an account?{" "}
        <Link href="/login" color="blue.400">
          Log in
        </Link>
      </Text>
      {showAlert && <AuthAlert setShowAlert={setShowAlert} />}
    </Box>
  );
}

