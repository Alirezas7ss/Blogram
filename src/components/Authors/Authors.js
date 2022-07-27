import { useQuery } from "@apollo/client";
import { Grid, Avatar, Typography, Divider, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import Loader from "../shared/loader";

export default function Authors() {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <Loader />;

  if (errors) return <h4>Loading ...</h4>;
  const { authors } = data;
  console.log(data);
  return (
      <Grid
        container
        sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
      >
        {authors.map((author, index) => (
          <React.Fragment key={author.id}>
            <Grid item xs={12} padding={2}>
              <Link
                to={`/author/${author.slug}`}
                style={{
                  alignItems: "center",
                  display: "flex",
                  textDecoration: "none",
                }}
              >
                <Avatar
                  src={author.avatar.url}
                  sx={{ marginLeft: 2, marginRight: 2 }}
                />
                <Typography component="p" variant="p" color="text.secondary">
                  {author.name}
                </Typography>
              </Link>
            </Grid>
            {index !== authors.length - 1 && (
              <Grid item xs={12}>
                <Divider variant="middle" />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
  );
}
