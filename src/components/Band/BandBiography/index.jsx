import { useState } from 'react';
import styles from './BandBiography.module.scss'

const BandBiography = ({ biography }) => {
    const [openBiography, setOpenBiography] = useState(false)

    return (
        <section>
            <p
                className={`${styles.band__biography} ${openBiography && styles["band__biography--isOpen"]}`} 
                onClick={() => setOpenBiography(true)}
            >
                {biography}
            </p>
        </section>
    );
}

export default BandBiography;