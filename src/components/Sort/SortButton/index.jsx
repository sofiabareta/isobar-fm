import { useState } from 'react';
import SortOptions from '../SortOptions';
import styles from './SortButton.module.scss'
import { styled } from 'styled-components';

const SortSelect = styled.div`
    position: relative;
`

const SortButton = ({ onSort }) => {
    const [open, setOpen] = useState(false)

    return (
        <SortSelect>
            <button className={styles.sortButton} onClick={() => setOpen(!open)}></button>
            <SortOptions open={open} onSort={onSort}/>
        </SortSelect>
    );
}
 
export default SortButton;