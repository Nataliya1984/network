import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";

import App from "./App";

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./components/redux/redux-store";



const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>

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



// import React from "react";
// import {StoreType} from "./components/redux/state";
//
// export const StoreContext = React.createContext({} as StoreType)
//
// export type ProviderType = {
//     store:StoreType
//     children:React.ReactNode
// }
//
// export const Provider = (props:ProviderType) => {
//     return(
//         <StoreContext.Provider value={props.store}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }
