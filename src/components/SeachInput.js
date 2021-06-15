import React from 'react'
import styled from 'styled-components'

import Icons from './../components/Icons'

const Container = styled.div`
display: flex;
width: calc(100% - 20%);
height: 48px;
border-radius: 20px;
background-color: #FDFCFC;
margin: 10px 0;

input {
        width: 100%;
        border-radius: 15px;
        border: none;
        background-color: transparent;
        color: #54565A;
        font-size: 16px;

        :focus {
            outline: none;
        }
    }
`

const SearchInput = () => {
    return(
        <Container alt="searchInput-container">
            <Icons name="lupa"></Icons>
            <input placeholder="Search Books"></input>
        </Container>
    )
}

export default SearchInput;