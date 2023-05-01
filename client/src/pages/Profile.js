// import React, { useState } from "react";
// import Home from "./Home";
// import { MuiFileInput } from 'mui-file-input'

// import {
//     Grid,
//     TextField,
//     Button,
// } from "@mui/material"

// const Message = require('./message/Message');

// const Profile = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [pic, setPic] = useState(null);
//   const [picMessage, setPicMessage] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
   
//   };

//   const handleFileUpload = (files) => {
   
//   };

//   return (
//     <Home title="EDIT PROFILE">
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           {success && (
//             <Message variant="success">
//               Updated Successfully
//             </Message>
//           )}
//           {error && <Message variant="danger">{error}</Message>}
//           <form onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               label="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <TextField
//               fullWidth
//               label="Email Address"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <TextField
//               fullWidth
//               label="Password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <TextField
//               fullWidth
//               label="Confirm Password"
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             {picMessage && (
//               <Message variant="danger">{picMessage}</Message>
//             )}
//             <MuiFileInput
//               onChange={(e) => handleFileUpload(e.target.files[0])}
//               id="custom-file"
//               accept="image/png"
//               label="Change Profile Picture"
//             />
//             <Button type="submit" variant="contained" color="primary">
//               Update
//             </Button>
//           </form>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <img src={pic} alt={name} className="profilePic" />
//         </Grid>
//       </Grid>
//     </Home>
//   );
// };

// export default Profile;
