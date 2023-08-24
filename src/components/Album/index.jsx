import { useEffect, useState } from "react";
import styles from './Album.module.scss'

const Album = ({ name, image }) => {
    
    return (
        <div className={styles.album}>
            <img className={styles.album__image} src={image} alt={`Album ${image}`} />
            <p className={styles.album__name}>{name}</p>
        </div>
    );
}
 
export default Album;