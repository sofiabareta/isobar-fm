import { useEffect, useState } from "react";

import Album from "../Album";

import { getEntity } from "../../services/base";
import styles from './AlbumList.module.scss'

const AlbumList = ({ list }) => {
    const [albumsList, setAlbumsList] = useState([])

    useEffect(() => {
        if (!list) return

        Promise.all(list.map(id => {
            return getEntity("Album", id)
        })).then(responses => setAlbumsList(responses))

    }, [list])

    return (
        <>
            <h2 className={styles.albumList__title}>Albuns</h2>
            <div className={styles.albumList}>
                { albumsList.map(album => <Album key={album.id} name={album.name} image={album.image} />) }
            </div>
        </>
    );
}
 
export default AlbumList;