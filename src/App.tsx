import React from "react";

interface PersonProps {
  age: number;
  name: string;
  isToggle: boolean
};

class App extends React.Component {

  state: PersonProps = {
    name: 'Stepan', 
    age: 25,
    isToggle: false
  };

  handleData = () => {
    this.setState({name: 'Mykola', age: 30});
  }

  handleToggle = () => {
    this.setState({ isToggle: !this.state.isToggle});
  };

  render() {
    const { age, name, isToggle} = this.state;
    
    return (
      <div>
        {!isToggle && <p>Name: {name}, age: {age}</p>}
        <button onClick={this.handleData}>Change Person Data</button>
        <button onClick={this.handleToggle}>{!isToggle ? 'Hide' : 'Show'}</button>
      </div>
    );
  }
}


export default App;