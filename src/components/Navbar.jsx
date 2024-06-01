import React from "react";
import { Stack, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "./assets/icon.png";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction={{ xs: "column", sm: "row" }}
    alignItems={{ xs: "center", sm: "flex-start" }}
    p={2}
    sx={{
      overflowY: "auto",
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between"
    }}
  >
    <Grid container spacing={2} alignItems="center">
      <Grid item  xs={12} sm={6} md={8}>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={45} />
          <Typography variant="h4" fontWeight="bold" sx={{ color: "white", paddingLeft: "10px", marginTop: "13px" }}>
            YouTube
          </Typography>
        </Link>
      </Grid>
      <Grid item  xs={12} sm={6} md={4}>
        <SearchBar />
      </Grid>
    </Grid>
  </Stack>
);

export default Navbar;
