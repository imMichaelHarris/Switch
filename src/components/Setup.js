import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Dropdown} from 'semantic-ui-react'

class Setup extends Component {
    state = {}

componentDidMount(){
    this.props.weekOne.map(emp => {
        console.log(emp)
    })
}
    render() {
        return (
            <div>
                setup
            </div>
        );
    }
}


export default Setup;