import Options from '../Options/Options'
import { LocationSearch, Wrapper } from './Filter.styles'
import { IoEarthSharp } from 'react-icons/io5'

interface FilterProps {
    setLocation: any,
    location: string,
    setTypes: any,
    types: string[],
}

function Filter({setLocation, location, setTypes, types}: FilterProps) {
    return (
        <Wrapper>
            <Options type='checkbox' text='Full time' setTypes={setTypes} types={types} />
            <LocationSearch>
                <label htmlFor="location">LOCATION</label>
                <div>
                    <IoEarthSharp />
                    <input 
                        type="text" 
                        name='location' 
                        id='location' 
                        placeholder='City, state, zip code or country'
                        value={location}
                        onSubmit={(e) => {e.preventDefault(); setLocation("")} }
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
            </LocationSearch>
        </Wrapper>
    )
}

export default Filter