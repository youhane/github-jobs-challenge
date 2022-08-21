import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { JobTags, BackButton, Company, Content, HowToApply, Job, Left, Right, Wrapper } from './ContentPage.styles'
import { IoEarthSharp } from 'react-icons/io5'
import { BiTimeFive } from 'react-icons/bi'
import { BsArrowLeft } from 'react-icons/bs'
import Tags from '../../components/Tags/Tags'

function ContentPage() {
    const { state }: any = useLocation()
    const navigate = useNavigate()

    return (
        <Wrapper>
            <Content>
                <Left>
                    <BackButton onClick={() => navigate(-1)}><BsArrowLeft /> Back to search</BackButton>
                    <HowToApply>
                        <h4>HOW TO APPLY</h4>
                        <p>Please email a copy of your resume and online portfolio to wes@kasisto.com & CC eric@kasisto.com</p>
                    </HowToApply>
                </Left>
                <Right>
                    <Job>
                        <h1>{state.role}</h1>
                        <JobTags>
                            {state.type.map((el: string, index: number) => {
                                return <Tags key={index} text={el} />
                            })}
                            {state.tags.map((el: string, index: number) => {
                                return <Tags key={index} text={el} />
                            })}
                        </JobTags>
                        <h3><BiTimeFive /> {state.posted}</h3>
                    </Job>
                    <Company>
                        <h3>{state.company}</h3>
                        <span><IoEarthSharp /> {state.location}</span>
                    </Company>
                    <p>{state.description}</p>
                </Right>
            </Content>
        </Wrapper>
    )
}

export default ContentPage