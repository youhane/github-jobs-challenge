import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { JobContext } from '../../components/Context/JobContext'
import { Wrapper } from './ContentPage.styles'

function ContentPage() {
    const { jobs } = useContext(JobContext)
    const [content, setContent] = useState(null)
    const { state } = useLocation()

    useEffect(() => {

    }, [])

    console.log(state)

    return (
        <Wrapper>
            Content 
        </Wrapper>
    )
}

export default ContentPage