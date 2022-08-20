import { COLORS } from './../../constants/styles';
import styled from "styled-components";

export const Wrapper = styled.span`
    border: 1px solid ${COLORS.textBlack};
    border-radius: .25rem;
    font-weight: 700;
    font-size: small;
    text-align: center;
    width: min-content;
    padding: .75rem;
    transition: all .2s ease-in-out;

    :hover{
        color: ${COLORS.bgWhite};
        background-color: ${COLORS.textBlack};
    }
`