import React, { useEffect } from 'react';
import styles from './experience.module.css';
import Fade from 'react-reveal/Fade';
import CardExperience from '../CardExperience';

function Experience({expData}) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Fade>
                    <h1>Active projects</h1>
                </Fade>
                <div className={styles.columns}>
                    {expData.map( (ex) => (
                        <CardExperience key={ex.title} expData={ex} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;

