import React from "react";
import { pageText } from "../data/siteData";

export default function Contact() {
  const { title, body } = pageText.Contact;
  return (
    <section>
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  );
}
