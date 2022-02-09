import './style.scss';
import React from "react";
import ocean_data from './media/data_charts/ocean_anomaly.json';
import land_data from './media/data_charts/land_anomaly.json';
import {
    LineChart, Line, XAxis, YAxis, Tooltip,
    Legend, ResponsiveContainer, CartesianGrid
} from "recharts";

const tmp = {
    'Global_Annual': 0,
    'Land_Annual': 1,
    'Ocean_Annual': 2,
}

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

function ChapterOne() {
    const [data, setData] = React.useState(merge(ocean_data, land_data));
    const [isOnScreen, setOnScreen] = React.useState(false)

    const animRef = React.useRef();
    const onScreen = useOnScreen(animRef, "-50px");

    console.log(data);
    const toggleLine = (event) => {

    }
    React.useEffect(() => {

    });
    return (
        <div id="chapterOneContainer">
            <div
                className="title"
                id="chapterOne"
            >
                Un climat qui se réchauffe
            </div>
            <div
                className="figContainer"
            >
                <div className="fig" ref={animRef}>
                    <ResponsiveContainer
                        width={"100%"} height={"100%"}
                    >
                        {
                            onScreen ?
                                <LineChart
                                    width={"1000"} height={"700"}
                                    data={data}
                                    margin={{
                                        top: 30,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                    key={onScreen}
                                >
                                    <CartesianGrid strokeDasharray="1 1" />
                                    <XAxis interval={13} dataKey="year" />
                                    <YAxis
                                    />
                                    <Tooltip />
                                    <Legend onClick={toggleLine} />
                                    <Line
                                        type="monotone"
                                        name={"Anomalies de temperature (continents)"}
                                        stroke="#82ca9d"
                                        strokeWidth={2}
                                        dataKey={"land_annual"}
                                        dot={false}
                                    />
                                    <Line
                                        type="monotone"
                                        name={"Anomalies de temperature (oceans)"}
                                        stroke="#8884d8"
                                        strokeWidth={2}
                                        dataKey="ocean_annual"
                                        dot={false}
                                    />
                                </LineChart>
                                :
                                <div></div>
                        }
                    </ResponsiveContainer>
                </div>
                <div className="desc">
                    <span className="partOne animOne">
                        Tout au long de son histoire,
                        le climat de la terre a beaucoup évolué.
                        Autrefois du fait de lents processus naturel,
                        les activités humaines sont devenues le principal
                        moteur du changement climatique.
                    </span>
                    <span className="partTwo">
                        Si le climat de la terre a connu des transformations
                        majeures, aujourd'hui, l'évidence du
                        réchauffement climatique actuel et à venir,
                        sa vitesse foudroyante, inédite dans
                        toute l'histoire géologique de la terre, nous frappe.
                    </span>
                </div>
            </div>
        </div>
    );

    function useOnScreen(animRef, rootMargin) {
        React.useEffect(() => {
            const current = animRef.current;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setOnScreen(entry.isIntersecting);
                },
                { rootMargin },
            );
            if (current) {
                observer.observe(current);
            }
            return () => observer.unobserve(current);
        }, [animRef, rootMargin]);
        return isOnScreen;
    }
}

export default ChapterOne;












