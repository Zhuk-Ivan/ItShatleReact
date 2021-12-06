import React from 'react';

class TestComponentClass extends React.Component {
  static defaultProps = {
    name: 'Default Ivan'
  }
  
  state = {
    counter: 0,
    color: 'red',
    age: 18
  }

  updateCount = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  decreseCount = () => {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  }

  render() {
    const { counter, age, color } = this.state;
    const { name } = this.props;
    return <>
      <h1>{name}</h1>
      <button onClick={this.updateCount}>Update count</button>
      <button onClick={this.decreseCount}>Decrese count</button>
      <p>This is test {counter}</p>
    </>
  }
}
// TestComponentClass.defaultProps = {
//   name : 'Default Ivan'
// }

export default TestComponentClass;