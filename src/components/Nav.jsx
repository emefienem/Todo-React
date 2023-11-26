import { Stack, Typography, useMediaQuery } from "@mui/material";
import { SearchBar } from "./";
const Nav = () => {
  const isMobile = useMediaQuery("(max-width:600px)")
  return (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#B2BEB5",
        top: 0,
        justifyContent: "space-between",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      <Typography
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: isMobile ? 'center' : 'left',
          mb: isMobile ? '20vh' : '0',
          fontSize: '20px'
        }}
      >
        To-do App
      </Typography>
      <SearchBar />
    </Stack>
  );
};

export default Nav;
