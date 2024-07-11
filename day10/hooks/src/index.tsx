import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import UseStateApp1 from './UseStateApp1';
// import UseStateApp2 from './UseStateApp2';
// import UseEffectApp1 from './UseEffectApp1';
// import UseEffectApp2 from './UseEffectApp2';
// import UseSampleApp2 from './UseSampleApp1';
// import UseContextApp1 from './UseContextApp1';
import UseRefApp1 from './UseRefApp1';
import UseRefApp2 from './UseRefApp2';
import UseRefApp3 from './UseRefApp3';
import UseRefApp4 from './UseRefApp4';
import UseMemoApp1 from './UseMemoApp1';
import UseMemoApp2 from './UseMemoApp2';
import UseCallbackApp1 from './UseCallbackApp1';
import UseCallbackApp2 from './UseCallbackApp2';
import UseLayoutEffectApp1 from './UseLayoutEffectApp1';
import UseLayoutEffectApp2 from './UseLayoutEffectApp2';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={{padding: '20px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
      <UseRefApp1/>
    </div>
    <div style={{padding: '20px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
      <UseRefApp2/>
    </div>
    <div style={{padding: '20px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
      <UseRefApp3 />
    </div>
    <div style={{padding: '20px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
      <UseRefApp4 />
    </div>
    <div style={{padding: '20px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
      < UseMemoApp1 />
    </div>
    <div style={{padding: '20px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
      < UseMemoApp2 />
    </div> 
    <div style={{padding: '20px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
      < UseCallbackApp1 />
    </div> 
    <div style={{padding: '20px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
      < UseCallbackApp2 />
    </div>

    <div style={{padding: '20px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
      < UseLayoutEffectApp1 />
    </div>

    <div style={{padding: '20px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9'}}>
      < UseLayoutEffectApp2 />
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
