import {SpacexLaunch} from "../SpacexLaunch/SpacexLaunch";

const SpacexLaunchIf = ({launch}) => {

    const {launch_year} = launch;

    return (
        <div>
            {launch_year !== "2020" && <SpacexLaunch launch={launch} />}
        </div>
    );
};

export {SpacexLaunchIf};