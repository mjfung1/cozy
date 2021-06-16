import { useState, useEffect} from 'react';
import { floors, name } from './1234_Test_Street.json';
import Apartment from './Apartment';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const App = () => {
    const [apartments, setApartments] = useState();

    useEffect(() => {
        const apartmentsArray = [];
        for (let floor of floors) {

            // COMMON HEATING AREA. ONLY 3RD FLOOR   

            // FLOOR LEVELs
            for (let apartment of floor.units) {
                //side comment
                //APT# && SPACES(dining, bedroom)
                apartmentsArray.push(apartment);
            }
        }

        setApartments(apartmentsArray);

    }, [])

  return (
    <Container>
      <h1>{name}</h1>
      <Grid container >
        <Apartment apartments={apartments} />
      </Grid>
    </Container>
  );
}

export default App;
