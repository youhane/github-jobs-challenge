import React from 'react'
import { Wrapper } from './Options.styles'

interface OptionsProps {
    type?: string,
    text: string,
}

function Options({ type, text }: OptionsProps) {
    return (
        <Wrapper>
            {
                type === 'checkbox' ?
                    <input type='checkbox' name={text} id={text} /> :
                    <input type='radio' name={text} id={text} />
            }
            <label htmlFor={text}>{text}</label>
        </Wrapper>
    )
}

export default Options