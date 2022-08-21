import styled from "styled-components";
import { COLORS } from "../../constants/styles";

export const Wrapper = styled.section`
`

export const Content = styled.div`
    color: ${COLORS.textBlack};
    margin: 2.5rem 0;
    display: grid;
    grid-template-columns: .35fr 1fr;
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const Jobs = styled.div`
`