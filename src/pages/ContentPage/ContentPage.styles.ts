import { COLORS } from './../../constants/styles';
import styled from "styled-components";

export const Wrapper = styled.section`
    color: ${COLORS.textBlack};
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: .25fr 1fr;
    grid-gap: 5rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }
`

export const Left = styled.div`
    margin: 0 1rem;
`

export const Right = styled.div`
    h1{
        margin: 0;
        margin-bottom: 1rem;
    }
    margin: 0 1rem;
`

export const JobTags = styled.div`
    display: flex;
    gap: .5rem;
    margin-bottom: 1rem;
`

export const Job = styled.div`
    h3{
        display: flex;
        align-items: center;
        gap: .5rem;
        color: #B7BCCE;
    }
`

export const Company = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin: 1rem 0;
    
    *{
        margin: 0;
    }
`

export const BackButton = styled.button`
    border: none;
    color: ${COLORS.blue};
    font-weight: 500;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: .5rem;
`

export const HowToApply = styled.div`
    h4{
        color: #B9BDCF;
    }

    p{
        font-weight: 600;
    }
`