// import React, { useState } from "react";
// import Home from "./Home";
// import { MuiFileInput } from 'mui-file-input';
// import { UPDATEUSER } from "../utils/mutations";
// import {
//     Sheet,
//     Typography,
//     FormControl,
//     FormLabel,
//     Input,
//     Button,
//     Box
//   } from "@mui/joy";
// import { useMutation } from "@apollo/client";
// import Auth from "../utils/auth";

  
// const Message = require('./message/Message');

// const User = () => {
//    const [formState, setFormState] = useState({
//     name: "", email: "", password: "", confirmPassword: "", 
//    })

//    const { name, email, password, confirmPassword} = formState;

//    const [updateUser] = useMutation(UPDATEUSER);

//     const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       if (formState.password === formState.confirmPassword){
//         const password = formState.password;
//         return password;
//       } else{
//         <User />
//       }
//       const mutationResponse = await updateUser({
//         variables: {
//           name: formState.name,
//           email: formState.email,
//           password: password,
//         },
//       });
//       // get the token from the response and save to localStorage
//       Auth.login(mutationResponse.data.signup.token);
//     } catch (err) {
//       console.log(err)
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//     <Home title="EDIT PROFILE">
//       <div>
//         <Box className="profileContainer">
//           sx={{ md: 6 }}
//             <Input onSubmit={handleSubmit}>
//               {/* {success && (
//                 <Message variant="success">
//                   Updated Successfully
//                 </Message>
//               )} */}
//               {/* {error && <Message variant="danger">{error}</Message>} */}
//               <Sheet controlId="name">
//                 <FormLabel>Name</FormLabel>
//                 <FormControl
//                   name="name"
//                   type="text"
//                   placeholder="Enter Name"
//                   value={name}
//                   onChange={handleChange}
//                 ></FormControl>
//               </Sheet>
//               <Sheet controlId="email">
//                 <FormLabel>Email Address</FormLabel>
//                 <FormControl
//                   name="email"
//                   type="email"
//                   placeholder="Enter Email"
//                   value={email}
//                   onChange={handleChange}
//                 ></FormControl>
//               </Sheet>
//               <Sheet controlId="password">
//                 <FormLabel>Password</FormLabel>
//                 <FormControl
//                   name="password"
//                   type="password"
//                   placeholder="Enter Password"
//                   value={password}
//                   onChange={handleChange}
//                 ></FormControl>
//               </Sheet>
//               <Sheet controlId="confirmPassword">
//                 <FormLabel>Confirm Password</FormLabel>
//                 <FormControl
//                   name="confirmPassword"
//                   type="password"
//                   placeholder="Confirm Password"
//                   value={confirmPassword}
//                   onChange={handleChange}
//                 ></FormControl>
//               </Sheet>{" "}
//               {/* {picMessage && (
//                 <Message variant="danger">{picMessage}</Message>
//               )}
//               <Sheet controlId="pic">
//                 <FormLabel>Change Profile Picture</FormLabel>
//                 <MuiFileInput
//                   onChange={(e) => postDetails(e.target.files[0])}
//                   id="custom-file"
//                   type="image/png"
//                   label="Upload Profile Picture"
//                   custom
//                 />
//               </Sheet> */}
//               <Button type="submit" varient="primary">
//                 Update
//               </Button>
//             </Input>
          
//           sx= {{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
          
//             {/* <img src={pic} alt={name} className="profilePic" /> */}

//         </Box>
//       </div>
//     </Home>

// };

// export default User;