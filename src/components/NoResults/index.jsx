import styles from './NoResults.module.scss'
import icon from './icon-noresults.png'

const NoResults = ({ text }) => {
    return (
        <div className={styles.noresults}>
            <h2 className={styles.noresults__message}>{text}</h2>
            <img src={icon} alt="Imagem de uma lupa" className={styles.noresults__image} />
        </div>
    );
}
 
export default NoResults;