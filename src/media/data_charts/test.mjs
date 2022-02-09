import ocean from './ocean_anomaly.json';
import all from './temp_anomaly_LandOcean.json';

function merge(first, second) {
    var f_entries = Object.entries(first);
    var s_entries = Object.entries(second);
    var count = 0;
    var newObj = [];

    while (count < f_entries.length) {
        newObj.push(Object.assign({},
            f_entries[count][1],
            s_entries[count][1])
        );
        count = count + 1;
    }
    return newObj;
}

function destroy(obj, toDestroy = '') {
    var f_entries = Object.entries(obj);
    var count = 0;
    var newObj = [];

    while (count < f_entries.length) {
        let tmp = Object.assign({}, f_entries[count][1]);
        delete tmp[toDestroy];
        newObj.push(tmp);
        count = count + 1;
    }
    return newObj;
}
