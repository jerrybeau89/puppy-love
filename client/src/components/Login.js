
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
    <main>
    
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

        <Button sx={{ mt: 1, color:"black", bgcolor: "#f4d40b" }} onClick={handleSubmit}>
          Log in
        </Button>
        <Typography
          endDecorator={<Link href="/signup">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: "center" }}
        >
          Don&apos;t have an account?
        </Typography>
      </Sheet>
      {showAlert && <AuthAlert setShowAlert={setShowAlert} forLogin={true}/>}
    </main>
  );
}
