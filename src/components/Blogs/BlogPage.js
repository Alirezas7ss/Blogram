import { useQuery } from "@apollo/client";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/queries";
import Loader from "../shared/loader";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../CommentForm/Comments";
export default function BlogPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;

  if (errors) return <h4>ERROR ...</h4>;

  console.log(data);
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space_between">
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight="bold"
            mt={3}
            ml={12}
          >
            {data.post.title}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverPost.url}
            alt={slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center" >
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: "80px", height: "80px", marginLeft: 2 }}
          />
          <Box component="div" ml={2}>
          <Typography component="p" variant="h5" fontWeight="bold" >
            {data.post.author.name}
          </Typography>
          <Typography component="p" variant="p" fontWeight="bold" color="text.secondary" >
            {data.post.author.field}
          </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5} textAlign="left" ml={6}  >
        <Grid  
            
            dangerouslySetInnerHTML={{
              __html: (data.post.content.html),
            }}
          ></Grid>
        </Grid>
        <Grid xs={12} item >
          <CommentForm slug={slug} />
        </Grid>
        <Grid xs={12} item >
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}
