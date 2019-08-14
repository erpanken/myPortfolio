import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import NavBar from './components/Navbar';
// import './App.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        Emmy Panken's Portfolio
      </header>
    </div>
  );
}

export default App;
