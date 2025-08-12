import React, { useState } from "react";
import NavBar from "./NavBar";
import Body from "./Body";
import Footer from "./Footer";

const navLinks = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "Contact", url: "/contact" },
];

const pageContent = {
  Home: {
    heading: "Welcome to Home",
    paragraph: "This is the home page content.",
  },
  About: {
    heading: "About Us",
    paragraph: "Here is some information about us.",
  },
  Services: {
    heading: "Our Services",
    paragraph: "Details about our services.",
  },
  Contact: {
    heading: "Contact Us",
    paragraph: "How to reach us.",
  },
};

function App() {
  const [activePage, setActivePage] = useState("Home");

  const handleNavClick = (pageName) => {
    setActivePage(pageName);
  };

  return (
    <div>
      <NavBar
        links={navLinks}
        onNavClick={handleNavClick}
        activePage={activePage}
      />
      <Body content={pageContent[activePage]} />
      <Footer />
    </div>
  );
}

export default App;
