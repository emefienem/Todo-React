import React, { useState } from "react";
import { Paper, IconButton, Box, useMediaQuery, Button } from "@mui/material";
import { Search } from "@mui/icons-material";
import LoginModal from "./LoginModal";

const SearchBar = () => {
  const isMobile = useMediaQuery("(maxwidth:600px)")
  const [displayLogin, setDisplayLogin] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName] = useState("");
  const [combinedWord, setCombinedWord] = useState("")
  
  const OpenDisplayModal = () => {
    setDisplayLogin(true);
  };
  
  const CloseDisplayModal = () => {
    setDisplayLogin(false);
  };
  
  const handleLogin = () => {
    const firstLetter = firstName.charAt(0);
    const lastLetter = lastName.charAt(0);
    const word = `${firstLetter}${lastLetter}`;
    setCombinedWord(word)
    CloseDisplayModal()
  }
  return (
    <Box display="flex">
      <Paper
        component="form"
        onSubmit={() => {}}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 3,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      >
        <input
          className="search-bar"
          placeholder="Search..."
          value=""
          onChange={() => {}}
        />
        <IconButton type="submit" sx={{ p: "10px", color: "#000" }}>
          <Search />
        </IconButton>
      </Paper>
      <Button
        onClick={OpenDisplayModal}
        sx={{
          borderRadius: 30,
          border: "none",
          backgroundColor: "purple",
          color: "#fff",
          ml: isMobile ? '15px' : ''
        }}
      >
        {combinedWord ? combinedWord : 'ME'}
      </Button>
      <LoginModal open={displayLogin} handleClose={CloseDisplayModal} handleLogin={handleLogin} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} />
    </Box>
  );
};

export default SearchBar;
