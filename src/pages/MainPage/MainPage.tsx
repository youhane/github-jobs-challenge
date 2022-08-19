import React from 'react'
import Filter from '../../components/Filter/Filter'
import Header from '../../components/Header/Header'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Content, Jobs, Wrapper } from './MainPage.styles'

function MainPage() {
  return (
    <Wrapper>
      <Header />
      <SearchBar />
      <Content>
        <Filter />
        <Jobs>

        </Jobs>
      </Content>
    </Wrapper>
  )
}

export default MainPage