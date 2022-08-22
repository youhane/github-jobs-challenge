import React from 'react'
import { Wrapper } from './SearchBar.styles'
import { BsBriefcase } from 'react-icons/bs'

interface SearchBarProps {
    setSearchAll: any,
    searchAll: string
}

function SearchBar({setSearchAll, searchAll }: SearchBarProps) {
    return (
        <Wrapper>
            <div>
                <BsBriefcase />
                <input 
                    type='text' 
                    value={searchAll} 
                    onChange={(e) => setSearchAll(e.target.value)}
                    onSubmit={(e) => {e.preventDefault(); setSearchAll("")} }
                    placeholder='Title, companies, experties or benefits' 
                />
                <button onClick={() => setSearchAll("")}>Search</button>
            </div>
        </Wrapper>
    )
}

export default SearchBar