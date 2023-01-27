import React from 'react';
import CarouselItem from "./carousel-item/carouse-item";
import styles from "./carousel.module.css";

function Carousel({title, items}) {
    return (
        <div>
            <div className="title">
                {title}
            </div>
            <div className={styles.content}>
                {items.map(item => (
                    <CarouselItem
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;