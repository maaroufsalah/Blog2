import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>
        الموقع الرسمي لجمعية حي الزهور للتنمية الاجتماعية، الثقافية، الفنية، الرياضية و البيئية. 
      </h1> */}
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image 
          src="https://scontent.fcmn1-1.fna.fbcdn.net/v/t39.30808-6/468330680_122174013200123590_6439232237891972312_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OuMLRQ7S40UQ7kNvgGV1Dnv&_nc_zt=23&_nc_ht=scontent.fcmn1-1.fna&_nc_gid=AeCAx5o68BFjLbFZsTrtbQl&oh=00_AYBSXgYzvJrCcgWMDpnh0PAf4zV0UEiOjpuKl1n3IPjVzw&oe=67665D0C" 
          alt="" 
          fill 
          className={styles.image} 
          style={{
            borderRadius: "2%",
            overflow: "hidden",
          }}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>مرحبا بكم في الموقع الرسمي لجمعية حي الزهور.</h1>
          <p className={styles.postDesc}>
          جمعية حي الزهور هي جمعية تنموية تهدف إلى تعزيز الأنشطة الاجتماعية،
           الثقافية، الفنية، الرياضية، والبيئية داخل الحي. تسعى الجمعية إلى نشر الوعي، دعم المواهب،
            وتنظيم فعاليات ومبادرات تساهم في تطوير المجتمع المحلي وتحسين جودة الحياة.
          </p>
          {/* <button className={styles.button}>Read More</button> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
