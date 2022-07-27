import "./App.css";
import { useQuery, gql } from "@apollo/client";
import Header from "./components/layout/Header";
import HomePage from "./components/Home/HomePage";
import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import AuthorPage from "./components/Authors/AuthorPage";
import BlogPage from "./components/Blogs/BlogPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { useState } from "react";
import ScrollToTop from "./components/shared/ScrollTop";
function App() {
  const[darkMode,setDarkMode] = useState(false)
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light"
    },
  });
  const colorMode = () =>
  {
    setDarkMode(!darkMode)
  }
  return (
    <ThemeProvider theme={theme}>
        <Paper elevation={0} >
        <div className="App">
          <ScrollToTop />
          <Layout colorMode={colorMode} theme={darkMode}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/author/:slug" element={<AuthorPage />} />
              <Route path="/blog/:slug" element={<BlogPage />} />
            </Routes>
          </Layout>
        </div>
    </Paper>
      </ThemeProvider>
  );
}

export default App;
