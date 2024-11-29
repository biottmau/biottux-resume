import React from "react";
import styles from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className={styles.container}>
      <h1>Where am I?</h1>
      <div className={styles.social}>
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/in/mauricio-javier-biott/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </motion.div>
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://www.instagram.com/biottmau/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </motion.div>
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://twitter.com/biottmau" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </motion.div>
        {/* <Zoom>
                    <a href="https://twitter.com/biottmau" target="_blank" >
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </Zoom> */}
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="mailTo://mauro@biott.com.ar" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
