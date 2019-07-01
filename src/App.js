import React from 'react';
import './App.css';
import {weekOne} from './weekOne'
import {weekTwo} from './weekTwo'
import Setup from './components/Setup';

class App extends React.Component {
  state = {
    selectedName: '',
    dayoff: null,
    timeChange: null,

  }
  

  render(){
  return (
    <div className="App">
      <Setup weekOne={weekOne}/>
    </div>
  );
  }
}

export default App;
