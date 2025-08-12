// data object for nav links + (optional) page content
export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

// You can keep page text here or inside each page component.
export const pageText = {
  Home: {
    title: "Francisco's React Site",
    body: "Welcome to my React app! This is my home page.",
  },
  About: {
    title: "About Me",
    body: "I want to learn to how to build appts.",
  },
  Services: {
    title: "Services",
    body: "We provide web dev, design, and consulting.",
  },
  Contact: {
    title: "Contact",
    body: "Email us at example@example.com",
  },
};
