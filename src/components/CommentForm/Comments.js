import { useQuery } from "@apollo/client";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import { GET_POST_COMMENTS } from "../../graphql/queries";
export default function Comments({ slug }) {
  const { loading, data } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });
  if (loading) return null
  console.log(data);
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
        textAlign: "left"
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography
          component="p"
          variant="h6"
          fontWeight="bold"
          color="primary"
        >
          COMMENTS
        </Typography>
        {data.comments.map((comment) => (
          <Grid
            item
            xs={12}
            key={comment.id}
            my={2}
            p={2}
            border="1px silver solid"
            borderRadius={1}
          >
            <Box mb={3} component="div" display = "flex" alignItems="center">
              <Avatar>
                {comment.name[0]}
              </Avatar>
              <Typography component="span" variant="p" ml={1} fontWeight="bold" >{comment.name}</Typography>
            </Box>
            <Typography component="p"  variant="p">{comment.text}</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
