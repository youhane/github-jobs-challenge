import React, { useContext, useEffect, useState } from 'react'
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
  const [searchAll, setSearchAll] = useState("")
  const [location, setLocation] = useState("")
  const [types, setTypes] = useState([])
  const [currentJobs, setcurrentJobs] = useState([])

  const nextPage = () => {
    setFrom(from + 10)
    setTo(to + 10)
  }

  const prevPage = () => {
    setFrom(from - 10)
    setTo(to - 10)
  }

  useEffect(() => {
    setcurrentJobs(jobs.slice(from, to))
    const filteredJobs = jobs.filter((job: { title: string; company_name: string; location: string; description: string; tags: any[] }) => {
      return job.title.toLowerCase().includes(searchAll.toLowerCase()) ||
        job.company_name.toLowerCase().includes(searchAll.toLowerCase()) ||
        job.location.toLowerCase().includes(searchAll.toLowerCase()) ||
        job.description.toLowerCase().includes(searchAll.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchAll.toLowerCase()))
    }).filter((job: { job_types: string | never[] }) => {
      return types.every(type => job.job_types.includes(type))
    }).filter((job: { location: string }) => {
      return job.location.toLowerCase().includes(location.toLowerCase())
    })
    setcurrentJobs(filteredJobs.slice(from, to))
  }, [from, jobs, location, searchAll, to, types])


  return (
    <Wrapper>
      <SearchBar setSearchAll={setSearchAll} searchAll={searchAll} />
      <Content>
        <Filter setLocation={setLocation} location={location} setTypes={setTypes} types={types} />
        <Jobs>
          {currentJobs.map((job: JobProps, index: any) => {
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