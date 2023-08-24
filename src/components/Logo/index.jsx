import { Link } from 'react-router-dom'

import style from 'styled-components'

const LogoImage = style.img`
    width: 10vw;
`

const Logo = () => {
    return (
        <Link to="/" style={{ display: "block", margin: "0 auto"}}>
            <LogoImage src='/assets/logo192.png' alt="logo" />
        </Link>
    );
}

export default Logo;