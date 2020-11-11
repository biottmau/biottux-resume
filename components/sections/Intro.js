import React from 'react';
import styles from './intro.module.css';


function Intro() {

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <h1>Why choose me as your Developer</h1>
                <p>
                    I'm a fullstack software developer. I started working in 1996 and  I had been learning about programming languages and others technologies since then.
                </p>
                <p>
                    Actually , I can say I may provide you with the ability to analyze, design, configure, test, code and develop any software.
                </p>
                <p>

                    About technologies, I can highlight the configurations and maintenance of Linux / Unix operating system (Vi, Vim, Bash, iptables, apache2, Lamp, Nginx, crontab, among others).
                </p>
                <p>

                    On the other hand,  programming and database languages I ever worked with, I can mention that I have experience with C / C ++, Java, JavaScript, PHP, JQuery, Angular, React, MySQL, PostgreSQL (PlPGSQL), SQLAnsi , NodeJS, C-Ojective, Yii2, Android Studio, Xcode and others.
                </p>
                <p>

                    I'm highly trained to design, test, and develop software.
                    In-depth understanding of data structures and algorithms.
                    Connoisseur of the Backend development practices.
                    Practical experience in solving software problems, corrective and preventive maintenance.
                </p>
            </div>
            <div className={styles.column_right}>
                <img src="/images/introImg.png" />
            </div>
        </div>
    );
}

export default Intro;