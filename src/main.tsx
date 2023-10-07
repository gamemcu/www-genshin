import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

function resizeWindow(){
  var width = document.documentElement.clientWidth;
  var height = document.documentElement.clientHeight;
  const root = document.getElementById('root');
  if (width > height) {
    root.style.transform = "rotate(0deg)";
    root.style.width = `${width}px`
    root.style.height = `${height}px`
    root.style.top = `0px`
    root.style.left = `0px`
  }
  else {
    root.style.transform = "rotate(90deg)";
    root.style.width = `${height}px`
    root.style.height = `${width}px`
    root.style.top = `${(height - width) / 2}px`
    root.style.left = `${0 - (height - width) / 2}px`
  }
}
resizeWindow()

var evt = "resize";//"onorientationchange" in window ? "orientationchange" : "resize";
window.addEventListener(evt, resizeWindow, false);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
