// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних обїектів
// {
//     "mission_name": "Starlink-15 (v1.0)",
//     "launch_date_local": "2020-10-24T11:31:00-04:00",
//     "launch_site": {
//     "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
// },
//     "links": {
//     "article_link": null,
//         "video_link": "https://youtu/J442-ti-Dhg"
// },
//     "rocket": {
//     "rocket_name": "Falcon 9",
//         "first_stage": {
//         "cores": [
//             {
//                 "flight": 7,
//                 "core": {
//                     "reuse_count": 6,
//                     "status": "unknown"
//                 }
//             }
//         ]
//     },
//     "second_stage": {
//         "payloads": [
//             {
//                 "payload_type": "Satellite",
//                 "payload_mass_kg": 15400,
//                 "payload_mass_lbs": 33951.2
//             }
//         ]
//     }
// }
// }


interface Cores {
    [index: number]: {
        flight: number,
        core: {
            reuse_count: number,
            status: string
        }
    };
}

interface Payloads {
    [index: number]: {
        payload_type: string,
        payload_mass_kg: number,
        payload_mass_lbs: number,
    };
}

interface IUser {
    mission_name: string,
    launch_date_local: string,
    launch_site: {
        site_name_long: string
    },
    links: {
        article_link: null | string,
        video_link: string
    },
    rocket: {
        rocket_name: string,
        first_stage: {
            cores: Cores;
        },
        second_stage: {
            payloads: Payloads;
        }
    }
}

const user2: IUser = {
    mission_name: "Starlink-15 (v1.0)",
    launch_date_local: "2020-10-24T11:31:00-04:00",
    launch_site: {
        site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    links: {
        article_link: null, video_link: "https://youtu/J442-ti-Dhg"
    },
    rocket: {
        rocket_name: "Falcon 9",
        first_stage: {
            cores: [
                {
                    flight: 7,
                    core: {
                        reuse_count: 6, status: 'unknown'
                    }
                },
                {
                    flight: 8, core: {
                        reuse_count: 7, status: 'adfdf'
                    }
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_mass_kg: 15400,
                    payload_mass_lbs: 33951.2,
                    payload_type: 'Satellite'
                },
                {
                    payload_mass_kg: 34,
                    payload_mass_lbs: 2.2,
                    payload_type: 'xd'
                }
            ]
        }
    }
}

console.log(user2);

// ---------------------------------------------------------------------------—————————
// 2) протипізувати функції:

const user = {
    name: "Max",
    age: 18,
    gender: 'male'
}

function sum(a: number, b: number): number {
    return a + b
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

function incAge(someUser: { name: string, age: number, gender: string }, inc: number): object {
    someUser.age += inc;
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3);
console.log(incAge(user, 2));
