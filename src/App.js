import React, {Component} from 'react';
import ListDemo from "./ListDemo/components";

class App extends Component {
  render() {
      console.log("store is : ",this.props);
    return (
      <div className="App">
        <ListDemo />
      </div>
    );
  }
}

export default App;
