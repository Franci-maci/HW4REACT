import React from "react";
import { pageText } from "../data/siteData";

export default function About() {
  const { title, body } = pageText.About;
  return (
    <section>
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  );
}
