import axios from "axios";
import {useEffect, useState} from "react";
import {SpacexLaunching} from "../SpacexLaunching/SpacexLaunching";

const SpacexLaunches = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v4/launches/').then(value => value.data).then(value => setLaunches([...value]))
    }, []);


    return (
        <div>
            {launches.filter(launching => launching.static_fire_date_utc.startsWith('2020')).map(launching => <SpacexLaunching key={launching.id} launching={launching}/>)}
        </div>
    );
};

export {SpacexLaunches};