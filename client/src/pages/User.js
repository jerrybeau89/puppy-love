import React, { useState } from "react";
import Home from "./Home";
import { MuiFileInput } from 'mui-file-input'

import {
    Sheet,
    Typography,
    FormControl,
    FormLabel,
    Input,
    Button,
    Grid,
  } from "@mui/joy";

  
const Message = require('./message/Message');

const User = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    <Home title="EDIT PROFILE">
      <div>
        <Grid className="profileContainer">
          sx={{ md: 6 }}
            <Input onSubmit={submitHandler}>
              {success && (
                <Message variant="success">
                  Updated Successfully
                </Message>
              )}
              {error && <Message variant="danger">{error}</Message>}
              <Sheet controlId="name">
                <FormLabel>Name</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></FormControl>
              </Sheet>
              <Sheet controlId="email">
                <FormLabel>Email Address</FormLabel>
                <FormControl
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></FormControl>
              </Sheet>
              <Sheet controlId="password">
                <FormLabel>Password</FormLabel>
                <FormControl
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></FormControl>
              </Sheet>
              <Sheet controlId="confirmPassword">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></FormControl>
              </Sheet>{" "}
              {picMessage && (
                <Message variant="danger">{picMessage}</Message>
              )}
              <Sheet controlId="pic">
                <FormLabel>Change Profile Picture</FormLabel>
                <MuiFileInput
                  onChange={(e) => postDetails(e.target.files[0])}
                  id="custom-file"
                  type="image/png"
                  label="Upload Profile Picture"
                  custom
                />
              </Sheet>
              <Button type="submit" varient="primary">
                Update
              </Button>
            </Input>
          
          sx= {{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          
            <img src={pic} alt={name} className="profilePic" />

        </Grid>
      </div>
    </Home>

};

export default User;