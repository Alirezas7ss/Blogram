import { Grid, Typography, Paper } from "@mui/material";
import { Container } from "@mui/system";
import Authors from "../Authors/Authors";
import React from "react";
import Blogs from "../Blogs/Blogs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
export default function HomePage() {
  
  return (
        <Container maxWidth="lg">
          <Grid textAlign="left" container spacing={2} padding={3}>
            <Grid item xs={12} md={3} mt={4}>
              <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
                Authors
              </Typography>
              <Authors />
            </Grid>
            <Grid item xs={12} md={9} mt={4}>
              {" "}
              <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
                Blogs
              </Typography>
              <Blogs />
            </Grid>
          </Grid>
        </Container>
  
  );
}
