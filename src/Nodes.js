import React from "react";
import Temperature from "./Temperature";

function Nodes ({ radiators }) {

    return (
        <div>
            {radiators.length ? (radiators && radiators.map(radiator => {
                let nodes = radiator.nodes;
                let nodeNumber = radiator.number;
                return (
                    <Temperature nodes={nodes} />  
                ) 
            })) : (<div>no radiators here</div>)
            }
        </div>
    )
};

export default Nodes;