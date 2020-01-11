export type ParameterDescriptor = {
    name: string;
    exposed?: true;
};

export const parameterDescriptors: {
    [x: string]: ParameterDescriptor
} = {
    environment: {name: "Environment", exposed: true},
    money: {name: "Money", exposed: true},
    security: {name: "Security", exposed: true},
    people: {name: "People", exposed: true},

    pollution: {name: "Pollution"},
    pollution_air: {name: "Air pollution"},
    pollution_land: {name: "Land pollution"},
    pollution_water: {name: "Water pollution"},

    energy: {name: "Energy"},
    energy_nuclear: {name: "Nuclear energy"},
    energy_wind: {name: "Wind energy"},
    energy_water: {name: "Water energy"},
    energy_wave: {name: "Wave energy"},
    energy_fusion: {name: "Fusion energy"},
    energy_coal: {name: "Coal energy"},
    energy_gas: {name: "Gas energy"},

    science_social: {name: "Social science"},
    science_environment: {name: "Environmental science"},
    science_security: {name: "Security research"},

    freedom: {name: "Freedom"},
    freedom_economic: {name: "Economic freedom"},
    freedom_market: {name: "Market freedom"},
    freedom_press: {name: "Freedom of press"},
    freedom_speach: {name: "Freedom of speach"},
    freedom_religious: {name: "Religious freedom"},
    freedom_travel: {name: "Freedom to travel"},

    environment_nature_reserves: {name: "Nature reserves"},
    environment_protection_policies: {name: "Environment protection policies"},
    environment_water_supplies: {name: "Water supplies"},
    environment_wildlife: {name: "Wildlife"},

    people_jobs: {name: "Jobs"},
    people_culture: {name: "Culture"},
    people_education: {name: "Education"},
    people_entertainment: {name: "Entertainment"},
    people_propaganda: {name: "Propaganda"},

    consumption: {name: "Consumption"},
    consumption_food: {name: "Food consumption"},
    consumption_travel: {name: "Travel consumption"},
    consumption_water: {name: "Water consumption"},
    consumption_energy: {name: "Energy consumption"},
    consumption_fuel: {name: "Fuel consumption"},
    consumption_electronics: {name: "Electronics consumption"},

    government_democracy: {name: "Democracy"},
    government_police: {name: "Police"},
    government_military: {name: "Military"},
    government_diplomacy: {name: "Diplimacy"},
    government_nationalism: {name: "Nationalism"},
    government_immigration: {name: "Immigration"},
};
export const {
    environment,
    money,
    security,
    people,

    pollution,
    pollution_air,
    pollution_land,
    pollution_water,

    energy,
    energy_nuclear,
    energy_wind,
    energy_water,
    energy_wave,
    energy_fusion,
    energy_coal,
    energy_gas,

    science_social,
    science_environment,
    science_security,

    freedom,
    freedom_economic,
    freedom_market,
    freedom_press,
    freedom_speach,
    freedom_religious,
    freedom_travel,

    environment_nature_reserves,
    environment_protection_policies,
    environment_water_supplies,
    environment_wildlife,

    people_jobs,
    people_culture,
    people_education,
    people_entertainment,
    people_propaganda,

    consumption,
    consumption_food,
    consumption_travel,
    consumption_water,
    consumption_energy,
    consumption_fuel,
    consumption_electronics,

    government_democracy,
    government_police,
    government_military,
    government_diplomacy,
    government_nationalism,
    government_immigration,
} = Object.keys(parameterDescriptors).reduce<{[x: string]: ParameterDescriptor}>((acc, key) => Object.assign(acc, {[key]: Object.assign({id: key}, parameterDescriptors[key])}), {});

export const parameterDependencies: {p: ParameterDescriptor, d: {effect: number, parameter: ParameterDescriptor}[]}[] = [
    {
        p: environment,
        d: [
            {effect: -1, parameter: pollution},
            {effect: -1, parameter: energy_coal},
            {effect: -1, parameter: energy_gas},
            {effect: 1.5, parameter: environment_nature_reserves},
            {effect: 1.5, parameter: environment_protection_policies},
            {effect: 1.5, parameter: environment_wildlife},
            {effect: 1.5, parameter: environment_water_supplies},
        ]
    },
    {
        p: money,
        d: [
            {effect: 2.5, parameter: people_jobs},
            {effect: 2.5, parameter: consumption},
            {effect: -1, parameter: government_police},
            {effect: -1, parameter: government_military},
            {effect: -1, parameter: people_education},
            {effect: -1, parameter: people_propaganda},
        ]
    },
    {
        p: people,
        d: [
            ...[
                people_jobs,
                people_culture,
                people_education,
                people_entertainment,
                people_propaganda,
                freedom,
            ].map(p => ({effect: 1, parameter: p})),
            {effect: -3, parameter: pollution},
            {effect: 1, parameter: environment_water_supplies},
            {effect: -1, parameter: consumption_water},
        ]
    },
    {
        p: security,
        d: [
            ...[
                government_democracy,
                government_police,
                government_military,
                government_diplomacy,
                science_security,
                people_education,
            ].map(p => ({effect: 1, parameter: p})),
        ]
    },
    {
        p: pollution,
        d: [
            pollution_air,
            pollution_land,
            pollution_water,
        ].map(p => ({effect: 1, parameter: p})),
    },
    {
        p: energy,
        d: [
            energy_nuclear,
            energy_wind,
            energy_water,
            energy_wave,
            energy_fusion,
            energy_coal,
            energy_gas,
        ].map(p => ({effect: 1, parameter: p})),
    },
    {
        p: freedom,
        d: [
            freedom_economic,
            freedom_market,
            freedom_press,
            freedom_speach,
            freedom_religious,
            freedom_travel,
        ].map(p => ({effect: 1, parameter: p})),
    },
    {
        p: consumption,
        d: [
            consumption_food,
            consumption_travel,
            consumption_water,
            consumption_energy,
            consumption_fuel,
            consumption_electronics,
        ].map(p => ({effect: 1, parameter: p})),
    },
];