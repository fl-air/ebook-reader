
import React from 'react';
import styles from '../stylesheet/StarRate.module.css';

function starRate(props) {
    const rate = props.rate / 5 * 100;
    const style = {
        backgroundImage: `linear-gradient(90deg, #fc0 ${rate}%, #fff ${rate}%)`
    };

    return (
        <div style={style} className={styles.StarRate}>★★★★★</div>
    )
}

export default starRate;