import { gql } from "@apollo/client"
const GET_BLOGS_INFO  = gql` 
 query MyQuery {
  posts {
    author {
      ... on Author {
        name
        avatar {
          url
        }
      }
    }
    title
    slug
    id
    coverPost {
      url
    }
  }
 }
`
const GET_AUTHORS_INFO  = gql`
 query MyQuery {
  authors {
    name
    id
    slug
    avatar {
      url
    }
  }
}
`; 
const GET_AUTHOR_INFO =gql`
 query getAuthorInfo($slug: String!){
  author(where: {slug : $slug}) {
    avatar {
      url
    }
    field
    name
    description {
      html
    }
    posts {
      slug
      title
      coverPost {
        url
      }
    }
  }
}
`;
// const GET_BLOG_INFO = gql`
//   query getBlogInfo($slug: String!){
//     post(where: {slug: ""}) {
//     id
//     slug
//     title
//     coverPost {
//       url
//     }
//     content {
//       html
//     }
    // author {
    //   ... on Author {
    //     name
    //     avatar {
    //       url
    //     }
    //   }
    // }
//   }
// }
  
// `
const GET_POST_INFO = gql`
  query MyQuery($slug: String!) {
  post(where: {slug: $slug}) {
    id
    slug
    title
    coverPost {
      url
    }
    content {
      html
    }
    author {
      ... on Author {
        name
        field
        avatar {
          url
        }
      }
    }
  }
}
`;
const GET_POST_COMMENTS = gql`
query MyQuery($slug: String!) {
  comments(where: {post: {slug: $slug}}) {
    name
    email
    text
    id
  }
}`
export {GET_BLOGS_INFO , GET_AUTHORS_INFO , GET_AUTHOR_INFO , GET_POST_INFO , GET_POST_COMMENTS }