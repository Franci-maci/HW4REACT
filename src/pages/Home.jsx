import React from "react";
import { pageText } from "../data/siteData";

export default function Home() {
  const { title, body } = pageText.Home;
  return (
    <section>
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  );
}
