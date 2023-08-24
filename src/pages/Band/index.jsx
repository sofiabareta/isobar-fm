import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getEntity } from "../../services/base";

import { LoadingSpinner } from "../../components/LoadingSpinner";
import AlbumList from "../../components/AlbumList";
import Container from "../../components/UI/Container";
import BandBiography from "../../components/Band/BandBiography";
import BandBanner from "../../components/Band/BandBanner";
import BandHeader from "../../components/Band/BandHeader";

const Band = () => {
    const [band, setBand] = useState({});
    const [loading, setLoading] = useState(true)

    const bandId = useParams().id

    useEffect(() => {
       getEntity("Band", bandId)
        .then(response => {
            setBand(response)
            setLoading(false)
        })

    }, [bandId])

    return (
        <>
            {loading && <LoadingSpinner />}
            <BandBanner image={band.image} name={band.name} />
            <Container>
                <BandHeader {...band} />
                <BandBiography biography={band.biography}/>
            </Container>
            <AlbumList list={band.albums} />
        </>
    );
}

export default Band;