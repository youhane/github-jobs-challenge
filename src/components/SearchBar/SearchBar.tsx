import React from 'react'
import { Wrapper } from './SearchBar.styles'
import { BsBriefcase } from 'react-icons/bs'

function SearchBar() {
    return (
        <Wrapper>
            <div>
                <BsBriefcase />
                <input type='text' placeholder='Title, companies, experties or benefits' />
                <button>Search</button>
            </div>
        </Wrapper>
    )
}

export default SearchBar