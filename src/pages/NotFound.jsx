import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (<h1>Services Page</h1>)(
    <section>
      <h1>404 — Page Not Found</h1>
      <p>
        <Link to="/">Go back home</Link>
      </p>
    </section>
  );
}
