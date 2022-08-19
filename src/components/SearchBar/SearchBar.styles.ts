import styled from 'styled-components';
import backgroundImage from '../../assets/backgroundImg.png'
import { COLORS } from '../../constants/styles';

export const Wrapper = styled.nav`
    background-image: url(${backgroundImage});
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-radius: 0.5rem;

    div{
        display: flex;
        align-items: center;
        padding: .5rem 1rem;
        border-radius: .25rem;

        input{
            border: none;
            width: 50vw;
            margin-left: 1rem;
        }

        button{
            background: ${COLORS.blue};
            color: ${COLORS.innerWhite};
            border: none;
            padding: .75rem 2rem;
            border-radius: .25rem;
        }
    }
`