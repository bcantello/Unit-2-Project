import React, {useState} from "react";

function StartingLocationForm(props) {
    const [startingLocation, setStartingLocation] = useState('');
    const [endingLocation, setEndingLocation] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.handleSubmit(startingLocation, endingLocation);
        // props.handleSubmit(endingLocation);
        setStartingLocation("");
        setEndingLocation('');
    };

    const handleStartingChange = e => {
        const location = e.target.value;
        setStartingLocation(location);
    };

    const handleEndingChange = e => {
        const location = e.target.value;
        setEndingLocation(location);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="Starting-Location">Starting Location</label>
                <input
                    id="starting-location"
                    type="text"
                    value={startingLocation}
                    onChange={handleStartingChange}
                />
            </div>
            <div>
                <label htmlFor="Ending-Location">Ending Location</label>
                <input
                    id="ending-location"
                    type="text"
                    value={endingLocation}
                    onChange={handleEndingChange}
                />
            </div>
            <input type="submit" value="Set Starting Location"/>
        </form>
    );
}

export default StartingLocationForm;
