import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { SEND_COMMENT } from "../../graphql/mutations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Comments from "./Comments";
export default function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });
  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
    } else {
      toast.warn("Fill all the fields", {
        position: "top-center",
      });
    }
    if (data) {
      toast.success("SUCCESS", {
        position: "top-center",
      
      })
    }
  };
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography
          textAlign="left"
          component="p"
          variant="h6"
          fontWeight="bold"
          color="primary"
        >
          COMMENT
        </Typography>
        <Grid item xs={12} mt={2}>
          <TextField
            label="name"
            variant="outlined"
            sx={{ width: "100%" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} mt={2}>
          <TextField
            label="email"
            variant="outlined"
            sx={{ width: "100%" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} mt={2}>
          <TextField
            label="text"
            variant="outlined"
            sx={{ width: "100%" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            multiline
            minRows={4}
          />
        </Grid>
        <Grid display="flex" alignItems="left" item xs={12} m={2}>
          {loading ? (
            <Button variant="contained" disabled onClick={sendHandler}>
              sending ...
            </Button>
          ) : (
            <Button variant="contained" onClick={sendHandler}>
              send
            </Button>
          )}
        </Grid>
        
      </Grid>
      <ToastContainer />
    </Grid>
  );
}
