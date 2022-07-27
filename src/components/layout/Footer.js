import { Paper, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Paper>

    <footer>
      <Typography
        component="p"
        variant="p"
        color="primary"
        padding="10px"
        textAlign="center"
        mt={10}

        >
        GraphQl
      </Typography>
    </footer>
        </Paper>
  );
}
