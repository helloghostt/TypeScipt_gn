import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//StrictMode로 감싼 컴포넌트 트리에서는 일부 생명주기 메서드가 의도적으로 두 번 호출될 수 있습니다.
//이는 버그를 찾는 데 도움이 되지만, 로그가 두 번 출력되는 등의 현상이 발생할 수 있습니다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
