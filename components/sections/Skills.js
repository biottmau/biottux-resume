import React from 'react';
import styles from './skills.module.css';


function Skills() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>What I do?</h1>

                <div className={styles.columns}>
                    <div className={styles.col}>col 1</div>
                    <div className={styles.col}>col 2</div>
                    <div className={styles.col}>col 3</div>
                </div>
            </div>


        </div>
    );
}

export default Skills;