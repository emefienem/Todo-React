import React from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  useMediaQuery,
} from "@mui/material";

const LoginModal = ({ open, handleClose, handleLogin, firstName, setFirstName, lastName, setLastName  }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? 200 : 350,
          height: 200,
          bgcolor: "background.paper",
          border: "none",
          borderRadius: 5,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Login
        </Typography>
        <TextField
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
          InputProps={{
            style: {
              width: "100%",
            },
          }}
          InputLabelProps={{
            // shrink: true,
            style: {
              fontSize: 15,
            },
          }}
        />

        <TextField
          label="Last Name"
          variant="outlined"
          sx={{mt: '10px'}}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          InputProps={{
            style: {
              width: "100%",
            },
          }}
          InputLabelProps={{
            // shrink: true,
            style: {
              fontSize: 15,
            },
          }}
        />
        <Grid container justifyContent="start" alignItems="center" mt={2}>
          <Button onClick={handleLogin} variant="contained" color="primary">
            Login 
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default LoginModal;
