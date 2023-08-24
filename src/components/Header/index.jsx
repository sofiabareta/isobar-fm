import Search from '../Search';
import Logo from '../Logo';

import styles from './Header.module.scss'
import { useLocation } from 'react-router-dom';

const Header = ({ onSearch }) => {
    const location = useLocation().pathname;

    return (
        <header className={styles.header}>
            {location === "/" && <Search onSearch={onSearch}/>}
            <Logo />
        </header>
    );
}
 
export default Header;