import { Link } from 'react-router-dom'

import style from 'styled-components'

const LogoImage = style.img`
    max-width: 10vw;
    max-height: 100%;
`

const Logo = () => {
    return (
        <Link to="/">
            <LogoImage src='/assets/logo192.png' alt="logo" />
        </Link>
    );
}

export default Logo;