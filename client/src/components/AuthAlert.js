// import { ChakraProvider } from "@chakra-ui/react";
import { CloseIcon, WarningTwoIcon } from "@chakra-ui/icons";
import * as React from "react";
import { Box, Alert, IconButton, Text } from "@chakra-ui/react";

export const AuthAlert = ({ setShowAlert, forLogin }) => {
  return (
   
    // <Box
    //   display="flex"
    //   justifyContent="center"
    //   width="100%"
    //   position="fixed"
    //   zIndex="10"
    // >
    //   <Alert
    //     alignItems="flex-start"
    //     width="200px"
    //     status="error"
    //     bg="white"
    //     borderWidth="1px"
    //     borderColor="gray.300"
    //     borderRadius="md"
    //     startIcon={<WarningTwoIcon mt="2px" mr="4px" />}
    //     endChild={
    //       <IconButton
    //         variant="ghost"
    //         size="sm"
    //         colorScheme="red"
    //         onClick={() => setShowAlert(false)}
    //         icon={<CloseIcon />}
    //       />
    //     }
    //   >
    //     <Box>
    //       <Text fontWeight="bold" mt="0.25rem">
    //         Error
    //       </Text>
    //       <Text fontSize="sm" opacity="0.8">
    //         {forLogin ? "Login Failed!" : "Signup Failed!"}
    //       </Text>
    //     </Box>
    //   </Alert>
    // </Box>
  );
};
