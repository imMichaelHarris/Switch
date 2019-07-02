import React from 'react';
import './styles/App.css';
import {weekOne} from './weekOne'
import {weekTwo} from './weekTwo'
import {schedule} from './schedule'
import Setup from './components/Setup';

class App extends React.Component {
  state = {
    selectedName: '',
    dayoff: null,
    timeChange: null,
    switchType: null

  }
  
  switchType = (type) => {
    this.setState({
        switchType: type
    })
}
  render(){
    console.log(schedule);
  return (
    <div className="App">
      <Setup weekOne={weekOne} switchType={this.switchType} switchTypeSelection={this.state.switchType}/>
    </div>
  );
  }
}

export default App;
