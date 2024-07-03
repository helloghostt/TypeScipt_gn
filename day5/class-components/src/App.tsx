import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './GreetingFunction';

//함수형을 class로 바꿔보자 
class App extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = {
      enteredName: "",
      message:"",
    }
    this.onChangeName = this.onChangeName.bind(this);
  }
  
  state: {enteredName: string, message: string};

  onChangeName(e: React.ChangeEvent<HTMLInputElement>) {   //event를 e로도 씀
    this.setState({
      enteredName: e.target.value,
      message: `Hello from, ${e.target.value}`,
    });
  }
  render(){
    console.log("rendering App");
    return (
      <div className="App">
        <header className = "App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input value={this.state.enteredName} onChange={this.onChangeName}/>
          <Greeting message= {this.state.enteredName}/>
        </header>
      </div>
    );
  }
}
  //함수형
//function App(){
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <Greeting name = "David"/>
  //     </header>
  //   </div>
  // );
//}

export default App;
