import React, { useEffect } from "react";
import styles from "./skills.module.css";
import CardSkill from "../CardSkill";

function Skills({ allSkills }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>How can I help?</h1>
        </motion.div>
        <div className={styles.columns}>
          {allSkills.map((skl) => (
            <div className={styles.col} key={skl.title}>
              <CardSkill skillData={skl} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
