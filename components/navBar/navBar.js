import React from "react";

import ActiveLink from "./activeLink";

import styles from "./navBar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const NavBar = () => {
  return (
    <nav className={styles.main_component}>
      {menuItems.map((data, index) => {
        return <ActiveLink key={index} text={data.text} href={data.href} />;
      })}
    </nav>
  );
};

export default NavBar;
