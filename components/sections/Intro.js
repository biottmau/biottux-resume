import React, { useEffect } from 'react';
import styles from './intro.module.css';
import Fade from 'react-reveal/Fade';

export default function Intro({ postData }) {

    useEffect(() => {
        console.log(postData);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <Fade>
                    <h1>{postData.title}</h1>
                </Fade>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>
            <div className={styles.column_right}>
                <Fade>
                    <img src="/images/introImg.png" />
                </Fade>
            </div>
        </div>
    );
}


