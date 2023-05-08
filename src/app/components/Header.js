import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className={styles.main_header}>
        <div className={styles.navbar_brand}>
          <Link href={"/"}>
            <Image src={"/netflix-logo-1.png"} height={40} width={150} alt="" />
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
