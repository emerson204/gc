import React from "react";
import BlogHero from "./components/blogHero";
import NavInicio from "@/components/navInicio";
import NuestroBlog from "./components/nuestroBlog";

export default function PageBlog() {
  return (
    <>
      <BlogHero />
      <NavInicio ruta="/blog" nombre="Blog" />
      <NuestroBlog />
    </>
  );
}
