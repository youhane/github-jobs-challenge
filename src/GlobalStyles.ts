import { createGlobalStyle } from 'styled-components';
import {COLORS} from './constants/styles'

export const GlobalStyles = createGlobalStyle`
    *{
        scroll-behavior: smooth;
        background: ${COLORS.bgWhite};
        font-family: 'Poppins', sans-serif;
    }

    section{
        margin: 0 10rem;
    }
`