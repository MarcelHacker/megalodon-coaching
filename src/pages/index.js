import React from "react";
import MainPost from "../components/MainPost.js";
import allInCoaching from "../../public/analyse.jpg";

export default () => {
  const mainFeaturedPost = {
    title: "Der Weg ist das Ziel",
    description: `Nur wer sich selbst und den Gegner kennt, wird in allen Schlachten als Sieger hervorgehen. 
    
      Wer ich selbt nicht kennt und den Gegner nicht, wird in jeder Schlacht scheitern`,
    image: allInCoaching,
    imageText: "main image description",
  };
  return (
    <div>
      <MainPost post={mainFeaturedPost} />
    </div>
  );
};
