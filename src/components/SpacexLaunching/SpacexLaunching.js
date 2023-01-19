const SpacexLaunching = ({launching}) => {

    const {name, static_fire_date_utc, links} = launching;
    const {patch} = links;
    const {small} = patch;


    if (typeof static_fire_date_utc === "string" && static_fire_date_utc.startsWith("2020")) {
    } else {
        let date = static_fire_date_utc;
    }
    // let year = static_fire_date_utc.split('-')[0];
    // console.log(typeof year);
    // if (static_fire_date_utc && year !== "2020") {
    //
    //
    // }

    return (
        <div>
            <h2>Mission name - {name}</h2>
            <h3>Launch year - {static_fire_date_utc}</h3>
            <img src={small} alt={name}/>
        </div>
    );
};

export {SpacexLaunching};