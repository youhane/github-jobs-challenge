import Options from '../Options/Options'
import { LocationSearch, Wrapper } from './Filter.styles'
import { IoEarthSharp } from 'react-icons/io5'

function Filter() {
    return (
        <Wrapper>
            <Options type='checkbox' text='Full time' />
            <LocationSearch>
                <label htmlFor="location">LOCATION</label>
                <div>
                    <IoEarthSharp />
                    <input type="text" name='location' id='location' placeholder='City, state, zip code or country' />
                </div>
            </LocationSearch>
        </Wrapper>
    )
}

export default Filter