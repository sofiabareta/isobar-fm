import styles from './SortOptions.module.scss'
import { SORT_OPTIONS } from '../../../util/config';

const SortOptions = ({ open = false, onSort}) => {
    return (
        <ul className={styles.sort} style={{ display: open ? 'block' : 'none'}}>
            {
                SORT_OPTIONS.map(option => (
                    <li key={option.id}>
                        <button className={styles.sort__option} onClick={() => onSort(option.id)}>{option.displayValue}</button>
                    </li>
                ))
            }
        </ul>
    );
}

export default SortOptions;