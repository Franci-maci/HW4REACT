import React from "react";
import { Link } from "react-router-dom";

/**
 * NavBar receives `links` (array of {label,path})
 * It renders <Link> elements so clicking updates the URL and React Router shows the right page.
 */
export default function NavBar({ links = [] }) {
  return (
    <nav style={{ background: "#222", padding: "12px" }}>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          style={{
            color: "white",
            marginRight: "16px",
            textDecoration: "none",
            fontWeight: 600
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
