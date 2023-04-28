import * as React from "react";
import { Box, Alert, IconButton, Typography } from "@mui/joy";
import ReportIcon from "@mui/icons-material/Report";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export const AuthAlert = ({ setShowAlert, forLogin }) => {

    return (
        <Box 
        sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        position: "fixed",
        }}
        >
            < Alert 
            sx={{ alignItems: "flex-start", width: 200 }}
            startDecorator={React.cloneElement(<ReportIcon />, {
                sx: { mt: "2px", mx: "4px" },
                fontSize: "xl2",
            })}
            variant="soft"
            color="danger"
            endDecorator={
              <IconButton
                variant="soft"
                size="sm"
                color="danger"
                onClick={() => setShowAlert(false)}
              >
                <CloseRoundedIcon />
              </IconButton>
            }
          >
            <div>
              <Typography fontWeight="lg" mt={0.25}>
                Error
              </Typography>
              <Typography fontSize="sm" sx={{ opacity: 0.8 }}>
                {forLogin ? "Login Failed!" : "Signup Failed!"}
              </Typography>
            </div>
          </Alert>
        </Box>
    )
}