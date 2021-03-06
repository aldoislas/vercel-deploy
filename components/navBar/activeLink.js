import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./navBar.module.css";

const style = {
  textDecoration: "underline",
  color: "blue",
};

const ActiveLink = ({ text = "", href = "" }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : null}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
