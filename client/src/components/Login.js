
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import { Link } from "react-router-dom"
import { AuthAlert } from "./AuthAlert";

import {
  Sheet,
  Typography,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@mui/joy";
import Auth from "../utils/auth";



export default function Login() {
  const [showAlert, setShowAlert] = useState(false);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formState;
  // get the login mutation function from useMutation
  const [login, {error}] = useMutation(LOGIN);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
      // get the token from the response and save to localStorage
      Auth.login(mutationResponse.data.login.token);
    } catch (err) {
      setShowAlert(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main>
    
    <body>
      <div class="background">
          <Sheet
      sx={{
        color: "yellow",
        width: 300,
        mx: "auto", 
        my: 4, 
        py: 3, 
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "sm",
        boxShadow: "md",
        position: "relative",
      }}
      variant="outlined"
    >
      <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body2">Sign in to continue.</Typography>
        </div>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            // html input attribute
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
            // html input attribute
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={handleChange}
          />
        </FormControl>

        <Button sx={{ mt: 1, color:"white", bgcolor: "black",  ":hover": {bgcolor: "grey" }}} onClick={handleSubmit}>
          Log in
        </Button>
        <Typography
          fontSize="sm"
          sx={{ alignSelf: "center" }}>
          <h4>
           Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
          </h4>
        </Typography>
      </Sheet>
      {showAlert && <AuthAlert setShowAlert={setShowAlert} forLogin={true}/>}
      </div>
    </body>
    
    </main>
  );
}
