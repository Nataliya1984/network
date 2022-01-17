import React from 'react';
import './App.css';


function App() {
  return (
    <div className='app-wrapper'>
    <header className='header'>
        <img src ='https://cdn.pixabay.com/photo/2017/12/13/23/27/no-background-3017971_960_720.png' />
    </header>
        <nav className='nav'>
                <div>Profile</div>
                <div>Messages</div>
                <div>Main content</div>
        </nav>
            <div className='content'>
                main content
            </div>


    </div>
  );
}



export default App;
