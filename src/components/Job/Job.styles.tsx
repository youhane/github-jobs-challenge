import styled from "styled-components";
import { COLORS } from "../../constants/styles";

export const Wrapper = styled.div`
    background: ${COLORS.innerWhite};
    box-shadow: 0px 2px 4px 0px #0000000D;
    padding: .5rem 1rem;
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    
    *{
        background: ${COLORS.innerWhite};
        margin: 0;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: .25rem;
    
    h3{
        font-weight: 500;
    }
`

export const MoreInfo = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-top: auto;
    color: #B9BDCF;
    font-size: .9rem;

    *{
        display: flex;
        align-items: center;
    }
`

export const JobTags = styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;
`