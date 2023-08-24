import styles from './ArtistCard.module.scss'
import { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import { Link } from 'react-router-dom'

const ArtistCard = ({ image, name, numPlays, id, searchTerm}) => {
    const [highlightName, setHighlightName] = useState(name)

    const highlightText = (name, term) => {
        const regex = new RegExp(term, "i")

        term
        ? setHighlightName(parse(name.replace(regex, `<b>${term}</b>`)))
        : setHighlightName(name)
    }

    useEffect(() => {
        highlightText(name, searchTerm)

    }, [searchTerm, name])

    return (
        <Link to={`/band/${id}`} className={styles.card}>
            <img src={image} alt={`Band ${name}`} className={styles.card__image}/>
            <div>
                <h2 className={styles.card__name}>{highlightName}</h2>
                <p className={styles.card__plays}>{numPlays} plays</p>
            </div>
        </Link>
    );
}
 
export default ArtistCard;