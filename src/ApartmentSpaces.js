import React from "react";
import Nodes from "./Nodes";

function ApartmentSpaces({ apartmentSpaces }) {

    const aptSpaces = apartmentSpaces && apartmentSpaces.map(aptSpace => {
        // console.log(aptSpace)
        return (
            <React.Fragment>
                {aptSpace.name}
                <Nodes radiators={aptSpace.radiators} />
            </React.Fragment>
        )
    })

    

    return (
            <section>
                {aptSpaces}
            </section>
    )
}

export default ApartmentSpaces;