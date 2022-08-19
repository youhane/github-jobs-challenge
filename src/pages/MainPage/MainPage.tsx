import React, { useContext } from 'react'
import { JobContext } from '../../components/Context/JobContext'
import Filter from '../../components/Filter/Filter'
import Header from '../../components/Header/Header'
import Job from '../../components/Job/Job'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Content, Jobs, Wrapper } from './MainPage.styles'

interface JobProps {
  company_name: string,
  title: string,
  types: string[],
  location: string,
  created_at: string,
}

function MainPage() {
  const { jobs } = useContext(JobContext);

  return (
    <Wrapper>
      <Header />
      <SearchBar />
      <Content>
        <Filter />
        <Jobs>
          {jobs?.map((job: JobProps, index:any) => {
            return <Job
            key={index}
              company={job.company_name}
              role={job.title}
              type={job.types}
              location={job.location}
              posted={job.created_at}
            />
          })}
        </Jobs>
      </Content>
    </Wrapper>
  )
}

export default MainPage