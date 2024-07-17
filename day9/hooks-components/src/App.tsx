import React, {useReducer, useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './GreetingFunctional';
import ListCreator from './ListCreator';

const reducer =(state:any, action:any) => {
  console.log("enterNameReducer");
  switch(action.type) {
    case "enteredName":
      if (state.enteredName === action.payload){
        return state;
      }
      return{...state, enteredName: action.payload}
    case "message":
      return {...state, message: `Hello, ${action.payload}`}
    
    default: throw new Error ("Invalid action type " + action.type);
  }
}
const initialState = {
  enteredName: "",
  message: "",
};

function App() {
  const [{message, enteredName},dispatch] = 
    useReducer(reducer, initialState);
    const[startCount, setStartCount] = useState(0);
    const [count, setCount] = useState(0);
    const setCountCallback = useCallback(()=>{
        const inc=count+1>startCount ? count+1:
        Number(count+1)+startCount;
        setCount(inc);
    }, [count, startCount]);
    const [listItems, setListItems] = useState<Array<ListItem>>();
    useEffect(()=>{
      const li=[];
      for (let i=0; i<count; i++) {
        li.push({id:i});
      }
      setListItems(li);
    },[count]);

    const onWelcomeBtnClick = () => {
      setCountCallback();
    }
    const onChangeStartCount = (e:React.ChangeEvent<HTMLInputElement>) => { setStartCount(Number(e.target.value));     
    }
    // const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   dispatch({type: "enteredName", payload: e.target.value});
    //   dispatch({type: "message", payload: e.target.value});}
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <input value={enteredName} onChange={onChangeName}/> */}
        <Greeting 
          message={message}
          enteredName={enteredName}
          greetingDispatcher={dispatch}/>


        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
