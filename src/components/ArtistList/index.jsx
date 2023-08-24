import { styled } from "styled-components";
import ArtistCard from "../ArtistCard";

const Item = styled.li`
    padding: 16px 0;
    border-bottom: 1px solid lightgray;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        border-bottom: none;
    }
`

const ArtistList = ({ list, searchTerm }) => {
    return (
        <ul>
            { list.map(artist => <Item key={artist.id}><ArtistCard {...artist} searchTerm={searchTerm}/></Item>) }
        </ul>
    );
}
 
export default ArtistList;