import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";

import App from "./App";
import {store} from "./components/redux/state";
import {BrowserRouter} from "react-router-dom";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}



store.subscribe(()=>{
    rerenderEntireTree()
})
rerenderEntireTree()



//state:RootStateType

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
