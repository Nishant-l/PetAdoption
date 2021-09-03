import { useState } from "react";

const SearchParams = () =>{
    const[location,updateLocation] = useState('ci');
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input  id="location"
                            onChange = {e => updateLocation(e.target.value)}
                            value = {location}
                            laceholder = "location"
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;