import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/logo2.png"
            alt="جمعية حي الزهور"
            width={50}
            height={50}
            style={{
              borderRadius: "50%",
              overflow: "hidden",
            }}
          />
          <h1 className={styles.logoText}>جمعية حي الزهور</h1>
        </div>
        <p className={styles.desc}>
          جمعية حي الزهور هي جمعية تنموية تهدف إلى تعزيز الأنشطة الاجتماعية، الثقافية،
          الفنية، الرياضية، والبيئية داخل الحي. تسعى الجمعية إلى نشر الوعي، دعم المواهب،
          وتنظيم فعاليات ومبادرات تساهم في تطوير المجتمع المحلي وتحسين جودة الحياة.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          {/* <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link> */}
        </div>
        <div className={styles.list}>
          {/* <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link> */}
        </div>
        <div className={styles.list}>
          {/* <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
