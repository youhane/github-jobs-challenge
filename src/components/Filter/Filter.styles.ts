import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 50%;
`

export const LocationSearch = styled.div`
    display: flex;
    flex-direction: column;
    color: #B9BDCF;
    margin: 1.5rem 0;

    label{
        font-weight: 700;
    }

    div{
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-top: .5rem;
        background: white;
        box-shadow: 0px 2px 4px 0px #0000000D;
        padding: 1rem;
        border-radius: .5rem;

        *{
            background: transparent;
        }

        input{
            border: none;
            width: 100%;

            &:focus{
                outline: none;
                border: none;
            }
        }
    }
`