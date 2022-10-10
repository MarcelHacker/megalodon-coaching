import React from "react";
import MainPost from "../components/MainPost.js";

export default () => {
  const mainFeaturedPost = {
    title: "Title of a longer featured blog post",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imageText: "main image description",
    linkText: "Continue reading…",
  };
  return (
    <div>
      <MainPost post={mainFeaturedPost} />
    </div>
  );
};
