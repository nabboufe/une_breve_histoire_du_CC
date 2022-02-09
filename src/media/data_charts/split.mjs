import data from './temp_anomaly_LandOcean.json';
import * as fs from "fs";

var ocean = [];
var land = [];

for (let elem of data) {
    ocean.push({
        "year": elem["Year"],
        "ocean_annual": elem["Ocean_Annual"]
    });
    land.push({
        "year": elem["Year"],
        "land_annual": elem["Land_Annual"]
    });
}

fs.writeFile('./land_anomaly.json',
    JSON.stringify(land, null, 4), () => {});
fs.writeFile('./ocean_anomaly.json',
    JSON.stringify(ocean, null, 4), () => {});
