import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {state} from "./components/redux/state";

import {renderTree} from "./render";









renderTree(state)

// ReactDOM.render(
//   <React.StrictMode>
//       <BrowserRouter>
//     <App state={state} addPost={addPost}/>
//       </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
