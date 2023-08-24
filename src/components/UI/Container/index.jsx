import styles from './Container.module.scss'

const Container = ({ children, style }) => {
    return (
        <div className={styles.container} style={{ ...style }}> 
            {children}
        </div>
    );
}
 
export default Container;