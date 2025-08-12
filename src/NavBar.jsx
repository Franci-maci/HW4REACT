import React from "react";

function NavBar({ links, onNavClick, activePage }) {
  return (
    <nav>
      <ul
        style={{ listStyle: "none", padding: 0, display: "flex", gap: "1rem" }}
      >
        {links.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => onNavClick(link.name)}
              style={{
                cursor: "pointer",
                fontWeight: activePage === link.name ? "bold" : "normal",
                background: "none",
                border: "none",
                padding: 0,
                fontSize: "1rem",
              }}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
