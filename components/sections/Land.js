import React, { useEffect, useState } from 'react';
import styles from './sections.module.css'

const Land = () => {
    const [title_class, setTitleClass] = useState(styles.section_land_title_off);

    // Animation for title
    useEffect(() => {
        const timer = setTimeout( () => {
            setTitleClass(styles.section_land_title)
        } ,300);
        return () => clearInterval(timer);
    }),[];

    return (
        <div className={styles.section_land}>
            <div className={title_class}>
                @Biottux 
                <div className={styles.section_land_subtitle}>| Software Development</div>
            </div>
        </div>
    )
}

export default Land;