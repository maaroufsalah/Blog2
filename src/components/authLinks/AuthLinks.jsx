"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          تسجيل الدخول
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
          انشر
          </Link>
          <span className={styles.link} onClick={signOut}>
          تسجيل الخروج
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">الرئيسية</Link>
          <Link href="/">اتصل بنا</Link>
          <Link href="/">عن الجمعية</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">تسجيل الدخول</Link>
          ) : (
            <>
              <Link href="/write">انشر</Link>
              <span className={styles.link}>تسجيل الخروج</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
