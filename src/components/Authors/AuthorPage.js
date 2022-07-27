import { useQuery } from "@apollo/client";
import { Avatar, Card, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import sanitizeHtml from 'sanitize-html';
import CardEL from "../shared/CardEL";
import Loader from "../shared/loader"

export default function AuthorPage() {
 

  const { slug } = useParams();

  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;

  
  if (errors) return <h3>Error...</h3>;
  const { author:{posts , name , title , coverPost , description , avatar , field} } = data;
  console.log(data);

  return (
    <Container maxWidth="lg">
      <Grid container mt={10} >
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
         <Avatar src={avatar.url} sx={{width:"100px" , height:"100px" }}/>
         <Typography component="h3" variant="h5" style={{fontWeight:"bold"}} mt={4}>
            {name}
         </Typography>
         <Typography component="p" variant="h5" color="text.secondary"  mt={2} >
         {field}
          
         </Typography>
        </Grid>
        <Grid item xs={12} alignItems="left" textAlign="left"  >
          <div dangerouslySetInnerHTML={{__html : sanitizeHtml(description.html)}} ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight='bold'>
            <Grid container spacing={2} mt={2}>
              {posts.map((post) => (
               <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL
                title={post.title}
                slug={post.slug}
                coverPost={post.coverPost} />
               </Grid>
              ))}
            </Grid>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
