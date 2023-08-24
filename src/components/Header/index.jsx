import Search from '../Search';
import Logo from '../Logo';
import Container from '../UI/Container'

import styles from './Header.module.scss'
import { useLocation } from 'react-router-dom';

const Header = ({ onSearch }) => {
    const location = useLocation().pathname;

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__wrapper}>
                    {location === "/" && <Search onSearch={onSearch}/>}
                    <Logo />
                </div>
            </Container>
        </header>
    );
}
 
export default Header;