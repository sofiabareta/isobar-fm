import styles from './BandBanner.module.scss'

const BandBanner = ({ image, name }) => {
    return (
        <div className={styles.band__banner} style={{ backgroundImage: `url(${image})`, height: '35vh'}}>
            <h2 className={styles.band__name}>{name}</h2>
        </div>
    );
}
 
export default BandBanner;