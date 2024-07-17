import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/material-icons'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
// index는 SPA구조 ReactApp진입점으로 실제dom 구조상 필요한거고, App은 ReactApp의 최상위 컴포넌트로 virtual dom의 구조로 쓴다.