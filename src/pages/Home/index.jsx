import { useEffect, useState } from 'react'

import sortModel from '../../models/sort'
import { getEntity } from '../../services/base'

import Sort from '../../components/Sort'
import NoResults from '../../components/NoResults'
import ArtistList from '../../components/ArtistList'
import Container from '../../components/UI/Container'
import { LoadingSpinner } from '../../components/LoadingSpinner'

const Home = ({ search }) => {
    const [artists, setArtists] = useState([]);
    const [sort, setSort] = useState(false)
    const [filteredResults, setFilteredResults] = useState([])
    const [filter, setFilter] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getEntity("Band")
            .then(response => {
                setArtists(response)
                setFilteredResults(response)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        setArtists(filteredResults => filteredResults)
    }, [sort])

    useEffect(() => {
        if (!search) {
            return setFilteredResults(artists)
        }

        const regex = new RegExp(search, 'i')
        const filterResults = filteredResults.filter(artist => regex.test(artist.name))

        setFilteredResults(filterResults)
        setFilter(true)

    }, [search, artists, filteredResults])

    const handleSort = (type) => {
        sortModel(type)(filteredResults)
        sortModel(type)(artists)

        setSort(!sort)
    }

    return (
        <main>
            {loading && <LoadingSpinner />}
            {
                filter && filteredResults.length === 0
                ? <NoResults text="Sem resultados..."/>
                : (
                    <>
                        <Sort numResults={filteredResults.length} onSort={(type) => handleSort(type)}/>
                        <Container>
                            <ArtistList list={filteredResults} searchTerm={search}/>
                        </Container>
                    </>
                )
            }
        </main>
    );
}
 
export default Home;