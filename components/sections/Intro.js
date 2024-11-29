import React, { useEffect } from "react";
import styles from "./intro.module.css";

export default function Intro({ postData }) {
  useEffect(() => {
    console.log(postData);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{postData.title}</h1>
        </motion.div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
      <div className={styles.column_right}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/images/introImg.png" />
        </motion.div>
      </div>
    </div>
  );
}
