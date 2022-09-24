import { Pets, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const SearchDiv = styled("div")(({ theme }) => ({
    backgroundColor: "whitesmoke",
    padding: "0px 10px",
    width: "40%",
    borderRadius: theme.shape.borderRadius,
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const PetBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          PET PRINTS
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchDiv>
          <InputBase placeholder="search..." color={"text.primary"} />
        </SearchDiv>
        <IconBox>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => setOpen((prevValue) => !prevValue)}
            sx={{ width: 30, height: 30 }}
            alt="puppy"
            src="https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </IconBox>
        <PetBox onClick={(e) => setOpen((prevValue) => !prevValue)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="puppy"
            src="https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Typography variant="span">Nugget</Typography>
        </PetBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen((prevValue) => !prevValue)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
