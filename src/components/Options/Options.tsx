import React from 'react'
import { Wrapper } from './Options.styles'

interface OptionsProps {
    type?: string,
    text: string,
    setTypes: any,
    types: string[],
}

function Options({ type, text, setTypes, types }: OptionsProps) {
    return (
        <Wrapper>
            {
                type === 'checkbox' ?
                    <input 
                        type='checkbox' 
                        name={text} 
                        id={text} 
                        onChange={() => setTypes(types.push(text))} 
                    /> :
                    <input 
                        type='radio' 
                        name={text} 
                        id={text}
                        onChange={() => setTypes(types.push(text))} 
                    />
            }
            <label htmlFor={text}>{text}</label>
        </Wrapper>
    )
}

export default Options