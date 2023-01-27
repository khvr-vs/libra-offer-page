import React from 'react';
import styles from "./carousel-item.module.css";
function CarouseItem({icon, title, description}) {
    return (
        <div className={styles.container}>
            <div className="title-icon">
                {icon}
            </div>
            <div className="title">
                {title}
            </div>
            <div className="description">
                {description}
            </div>
        </div>
    );
}

export default CarouseItem;