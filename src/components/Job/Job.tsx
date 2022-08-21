import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Content, JobTags, MoreInfo, Wrapper } from './Job.styles'
import { IoEarthSharp } from 'react-icons/io5'
import { BiTimeFive } from 'react-icons/bi'
import Tags from '../Tags/Tags'

interface JobProps {
    company: string,
    role: string,
    type: string[],
    tags: string[],
    location: string,
    posted: string,
    slug: string,
    description: string,
}

function Job({ company, role, type, tags, location, posted, slug, description }: JobProps) {
    const navigate = useNavigate();

    return (
        <Wrapper onClick={() => navigate(`/${slug}`, {state: { company, role, type, tags, location, posted, description}})}>
            <Content>
                <h5>{company}</h5>
                <h3>{role}</h3>
                <JobTags>
                    {type.map((el, index) => {
                        return <Tags key={index} text={el} />
                    })}
                    {tags.map((el, index) => {
                        return <Tags key={index} text={el} />
                    })}
                </JobTags>
            </Content>
            <MoreInfo>
                <span><IoEarthSharp /> {location}</span>
                <span><BiTimeFive /> {posted}</span>
            </MoreInfo>
        </Wrapper>
    )
}

export default Job