import React from 'react'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Wrapper } from './MainPage.styles'

function MainPage() {
  return (
    <Wrapper>
      <Header />
      <SearchBar/>
      MainPage
    </Wrapper>
  )
}

export default MainPage