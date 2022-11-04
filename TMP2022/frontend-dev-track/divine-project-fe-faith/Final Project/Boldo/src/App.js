import React from "react";
import "./App.css";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import Loader from "./components/Loader/Loader";

const App = () => {

  return (
    <Layout>
      <Loader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
