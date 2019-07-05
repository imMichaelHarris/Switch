import React from 'react';

const Employee = (props) => {
    console.log(props)
    return (
        <div>
            <h3>{props.employee.name}</h3>
        </div>
    );
};

export default Employee;