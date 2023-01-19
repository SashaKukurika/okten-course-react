import axios from "axios";
import {useEffect, useState} from "react";

import {SpacexLaunchIf} from "../SpacexLaunchesIf/SpacexLaunchIf";

const SpacexLaunches = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches/').then(value => value.data).then(value => setLaunches([...value]))
    }, []);

    return (
        <div>
            {launches.map(launch => <SpacexLaunchIf key={launch.id} launch={launch}/>)}
        </div>
    );
};

export {SpacexLaunches};