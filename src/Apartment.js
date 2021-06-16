import React from "react"
import ApartmentSpaces from "./ApartmentSpaces"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
function Apartment({ apartments }) {

    const apartmentName = apartments && apartments.map(apartment => {
        return (
            <React.Fragment>
                
                <Grid xs={12} sm={12} md={12} >
                    <Paper>
                        APT {apartment.name}
                        <ApartmentSpaces apartmentSpaces={apartment.spaces} />
                    </Paper> 
                </Grid>
            </React.Fragment>
            )
        }
    );
                

    return (
            <React.Fragment>
                {apartmentName}
            </React.Fragment>
    )
};

export default Apartment;