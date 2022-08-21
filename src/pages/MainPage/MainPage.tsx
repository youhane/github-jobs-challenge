import React, { useContext, useState } from 'react'
import { JobContext } from '../../components/Context/JobContext'
import Filter from '../../components/Filter/Filter'
import Job from '../../components/Job/Job'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Content, Jobs, Paginate, Wrapper } from './MainPage.styles'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

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
  const [to, setTo] = useState(10)

  const nextPage = () => {
    setFrom(from + 10)
    setTo(to + 10)
  }

  const prevPage = () => {
    setFrom(from - 10)
    setTo(to - 10)
  }

  return (
    <Wrapper>
      <SearchBar />
      <Content>
        <Filter />
        <Jobs>
          {jobs?.slice(from, to).map((job: JobProps, index: any) => {
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
          <Paginate>
            {from > 0 && <button onClick={() => prevPage()}><IoIosArrowBack /></button>}
            {to !== 100 && <button onClick={() => nextPage()}><IoIosArrowForward /></button>}
          </Paginate>
        </Jobs>
      </Content>
    </Wrapper>
  )
}

export default MainPage