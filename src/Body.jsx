import React from "react";

function Body({ content }) {
  if (!content) return null;

  return (
    <main>
      <h1>{content.heading}</h1>
      <p>{content.paragraph}</p>
    </main>
  );
}

export default Body;
