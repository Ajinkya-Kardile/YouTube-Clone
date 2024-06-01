import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "./assets/icon.png";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", justifyContent:"center", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white", paddingLeft:'10px', marginTop: '13px'}}>
        YouTube
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;