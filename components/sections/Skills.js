import React from 'react';
import styles from './skills.module.css';
import Fade from 'react-reveal/Fade';
import CardSkill from '../CardSkill';


function Skills({ allSkills }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Fade>
                    <h1>What I do?</h1>
                </Fade>
                <div className={styles.columns}>
                    {allSkills.map((skl) => (
                        <div className={styles.col}>
                            <CardSkill skillData={skl} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;