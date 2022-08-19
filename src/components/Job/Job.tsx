import React from 'react'
import { Content, MoreInfo, Wrapper } from './Job.styles'
import { IoEarthSharp } from 'react-icons/io5'
import {BiTimeFive} from 'react-icons/bi'

interface JobProps {
    company: string,
    role: string,
    type: string[],
    location: string,
    posted: string,
}

function Job({ company, role, type, location, posted }: JobProps) {
    return (
        <Wrapper>
            <Content>
                <h5>{company}</h5>
                <h3>{role}</h3>
                {/* <span>{type.map(el=><p>{el}</p>)}</span> */}
                <MoreInfo>
                    <span><IoEarthSharp /> {location}</span>
                    <span><BiTimeFive /> {posted}</span>
                </MoreInfo>
            </Content>
        </Wrapper>
    )
}

export default Job