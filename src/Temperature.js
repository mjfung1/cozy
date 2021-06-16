import React from 'react';
import { retrieved_at } from './1234_Test_Street.json';

function Temperature ({ nodes }) {

     const temperatures = nodes.length ? (nodes.map(node => {
        let unprocessedDate = new Date(node.last_message);
        let dateLastUpdate = unprocessedDate.toDateString();
        let timeLastUpdate = unprocessedDate.toLocaleTimeString('en-US');

        let timeElapsed = (retrieved_at - node.last_message) / 3600000;
        let timeElapsed2Decimal = (Math.round(timeElapsed * 100) / 100).toFixed(2);

        
        return (
            <React.Fragment>
                <div>room = {node.room_temperature}F - - - radiator = {node.radiator_temperature}F - - - updated {timeElapsed2Decimal} hr ago</div>
            </React.Fragment>     
            )
    })) : (<div>not installed yet</div>)
    // console.log(temperatures)
    return (
        <React.Fragment>
            { temperatures }
        </React.Fragment>
    )
}

export default Temperature;