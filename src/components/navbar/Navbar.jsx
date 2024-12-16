import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>الرئيسية</Link>
        <Link href="/" className={styles.link}>اتصل بنا</Link>
        <Link href="/" className={styles.link}>عن الجمعية</Link>
        <AuthLinks />
        <ThemeToggle />
      </div>

      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/logo2.png"
            alt="جمعية حي الزهور"
            width={100}
            height={100}
            style={{
              borderRadius: "50%",
              overflow: "hidden",
            }}
          />
        </Link>
      </div>

      <div className={styles.social}>
        <Link href="https://web.facebook.com/profile.php?id=61553707719688" target="_blank">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </Link>
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
    </div>
  );
};

export default Navbar;
