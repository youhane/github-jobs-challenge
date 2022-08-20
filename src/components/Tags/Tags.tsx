import React from 'react'
import { Wrapper } from './Tags.styles'

interface TagsProps {
    text: string
}

function Tags({text}:TagsProps) {
  return (
    <Wrapper>
        {text}
    </Wrapper>
  )
}

export default Tags