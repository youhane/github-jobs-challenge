import React, { useContext, useState } from 'react'
import { JobContext } from '../../components/Context/JobContext'
import Filter from '../../components/Filter/Filter'
import Header from '../../components/Header/Header'
import Job from '../../components/Job/Job'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Content, Jobs, Wrapper } from './MainPage.styles'

interface JobProps {
  company_name: string,
  title: string,
  job_types: string[],
  tags: string[]
  location: string,
  created_at: string,
  slug: string,
  description: string,
}

function MainPage() {
  const { jobs } = useContext(JobContext);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(20)

  return (
    <Wrapper>
      <Header />
      <SearchBar />
      <Content>
        <Filter />
        <Jobs>
          {jobs?.slice(from, to).map((job: JobProps, index:any) => {
            return <Job
            key={index}
              company={job.company_name}
              role={job.title}
              type={job.job_types}
              tags={job.tags}
              location={job.location}
              posted={job.created_at}
              slug={job.slug}
              description={job.description}
            />
          })}
        </Jobs>
      </Content>
    </Wrapper>
  )
}

export default MainPage