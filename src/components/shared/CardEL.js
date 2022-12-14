import React from "react";
import {
  CardMedia,
  Avatar,
  Card,
  CardHeader,
  Typography,
  CardContent,
  Button,

  Divider,
  CardActions,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import { width } from "@mui/system";
export default function CardEL({ title, slug, coverPost, author }) {
  return (
    <Card
      sx={{ boxShadow: "rgba( 0 , 0 ,0,0.1) 0px 4px 12px ", borderRadius: 4 }}
    >
      { author && 
        <CardHeader
        avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
        title={
          <Typography component="p" variant="p" color="text.secondary">
            {author.name}
          </Typography>
        }
      />
      }
      <CardMedia
        component="img"
        height="194"
        image={coverPost.url}
        alt={slug}
        style={{backgroundSize : "cover" , position:"center"}}
      />
      <CardContent>
        <Typography component="h3" variant="h7" style={{minHeight : "50px"}}>
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin : "10px"}} />
      <CardActions>
        <Link to={`/blog/${slug}`} style={{textDecoration:"none" , width:"100%"}}>

        <Button
         variant="outlined"
         size="small"
         sx={{width:'100%' , borderRadius : 3}}
        >Read Blog</Button>

        </Link>
      </CardActions>
    </Card>
  );
}
