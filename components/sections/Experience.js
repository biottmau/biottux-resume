import React from 'react';
import styles from './experience.module.css';
import Fade from 'react-reveal/Fade';

function Experience () {

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <Fade>
                    <h1>Active projects</h1>
                </Fade>
                <div className={styles.columns}>
                    columns
                </div>
            </div>
        </div>
    );
}

export default Experience;

