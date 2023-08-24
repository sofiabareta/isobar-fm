import styles from './BandHeader.module.scss';

const BandHeader = ({ genre, image, name, numPlays}) => {
    return (
        <section className={styles.band__header}>
            <p className={styles.band__genre}>{genre}</p>
            <img className={styles.band__image} src={image} alt={`Band ${name}`} />
            <p className={styles.band__plays}>{numPlays} plays</p>
        </section>
    );
}
 
export default BandHeader;