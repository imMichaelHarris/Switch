import React from 'react';
import {Link} from 'react-router-dom'
import Employee from './Employee';


const EmployeeList = (props) => {
    return (
        <div>
            <Link to="/">Refine your search</Link>
{props.availablePeople.map(emp => <Employee employee={emp} key={emp.name} />)}
        </div>
    );
};

export default EmployeeList;