import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
} from "react-simple-maps";

const Map = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-30.0, -51.0, 0],
                center: [2, -3],
                scale: 700
            }}
            style={{width:"100%", height:"100%",}}
        >
            <Geographies
                geography="/features.json"
                fill="#2C065D"
                stroke="#FFFFFF"
                strokeWidth={0.5}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[32,39]}
                dx={0}
                dy={0}
            >
                <text x="0" textAnchor="start" alignmentBaseline="middle" fill="white">
                    {"Turkey"}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default Map;
