import React, { useEffect } from "react";
import styles from "./experience.module.css";
import CardExperience from "../CardExperience";
import { motion } from 'framer-motion';

function Experience({ expData }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Active projects</h1>
        </motion.div>
        <div className={styles.columns}>
          {expData.map((ex) => (
            <CardExperience key={ex.title} expData={ex} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
