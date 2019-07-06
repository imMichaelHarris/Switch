import React from 'react';


const ResultInfo = (props) => {
    return (
        <div>
        <h4>Showing {props.results} results for available {`${props.type}s`} that {props.switchType === "Time Change" ? `are off before ${props.time} on ${props.normalDate}` : `have ${props.normalDate} off.` }</h4>

        </div>
    );
};

export default ResultInfo;