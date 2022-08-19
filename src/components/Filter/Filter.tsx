import React from 'react'
import Options from '../Options/Options'
import { Wrapper } from './Filter.styles'

function Filter() {
  return (
    <Wrapper>
        <Options/>
        <div>
            <label htmlFor="location">Location</label>
            <input type="text" name='location' id='location' />
        </div>
        <Options/>
    </Wrapper>
  )
}

export default Filter