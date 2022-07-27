import React from "react";
import IconButton from '@mui/material/IconButton';
import BookIcon from "@mui/icons-material/Book";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import{Link} from "react-router-dom"
export default function Header({colorMode , theme}) {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
            <Typography
              textAlign="left"
              component="h1"
              variant="h5"
              fontWeight="bold"
              flex={1}
            >
          <Link to="/"  style={{textDecoration:"none" , color:"rgb(153, 194, 255)" , textShadow:"0px 0px 6px rgba(255,255,255,0.7)"}}>
              Blogrom
          </Link>
            </Typography>
            <Link to="/"  style={{textDecoration:"none" , color:"rgb(153, 194, 255)"}}>
          <BookIcon />
          </Link>
          <IconButton sx={{ ml: 1 }} onClick={colorMode} color="inherit">
        {theme  ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
