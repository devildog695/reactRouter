import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "gold" }}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
