import styles from './Search.module.scss'

const Search = ({ onSearch }) => {
    return (
        <>
            <input className={styles.search} type="text" name="search" id="search" onChange={e => onSearch(e.target.value)}/>
        </>
    );
}

export default Search;