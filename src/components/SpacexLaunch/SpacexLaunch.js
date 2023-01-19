const SpacexLaunch = ({launch}) => {

    const {launch_year, mission_name,links: {mission_patch_small}} = launch;

    return (
        <div>
             <h2>Mission name - {mission_name}</h2>
             <h3>Launch year - {launch_year}</h3>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {SpacexLaunch};