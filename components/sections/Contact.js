import React from 'react';
import styles from './contact.module.css';
import Zoom from 'react-reveal/Zoom';


function Contact() {
    return (
        <div className={styles.container}>
            <h1>Where am I?</h1>
            <p>Phone: +54 2901 404438</p>
            <div className={styles.social}>
                <Zoom>
                    <a href="https://www.linkedin.com/in/mauricio-javier-biott/" target="_blank" >
                        <img src="/images/linkedin.png" />
                    </a>
                </Zoom>
                <Zoom>
                    <a href="https://www.instagram.com/biottmau/" target="_blank" >
                        <img src="/images/twitter.png" />
                    </a>
                </Zoom>
                <Zoom>
                    <a href="https://twitter.com/biottmau" target="_blank" >
                        <img src="/images/instagram.png" />
                    </a>
                </Zoom>
            </div>
        </div>

    );
}

export default Contact;