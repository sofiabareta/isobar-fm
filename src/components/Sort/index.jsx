import SortButton from './SortButton';
import styles from './Sort.module.scss'
import Container from '../UI/Container';

const Sort = ({ numResults, onSort }) => {

    const containerStyle = {
        backgroundColor: '#eeeff1',
        marginBottom: '16px'
    }

    return (
        <Container style={containerStyle}>
            <div className={styles.sort}>
                <p className={styles.sort__results}>{`${numResults} resultados`}</p>
                <SortButton onSort={onSort} />
            </div>
        </Container>
    );
}
 
export default Sort;