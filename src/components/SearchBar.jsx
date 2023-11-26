import { Paper, IconButton, Typography, Box, useMediaQuery } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const isMobile = useMediaQuery("(maxwidth:600px)")
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
      <Typography
        sx={{
          borderRadius: 10,
          border: "none",
          p: 1.5,
          backgroundColor: "purple",
          color: "#fff",
          ml: isMobile ? '15px' : ''
        }}
      >
        ME
      </Typography>
    </Box>
  );
};

export default SearchBar;
