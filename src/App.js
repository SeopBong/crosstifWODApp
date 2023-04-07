import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Main from './Main';


function App() {

  let [mainBtnColor, setMainBtnColor] = useState('#FFFFFF');
  let [textColor, setTextColor] = useState('#F37116');


  const handleMouseEnter = ()=>{
    setMainBtnColor('#F37116');
    setTextColor('#FFFFFF');
    
  };
  
  const handleMouseLeave = ()=>{
    setMainBtnColor('#FFFFFF');
    setTextColor('#F37116');
  }
  
  
  return (
    <div className="App">
      <div className='container'>
        <img className='logo1' src='./crossfitable.jpg'></img>
        <div>
          <Link to={"/Main"}>
          <button className='munjung-btn' style={{ backgroundColor:mainBtnColor, color: textColor}} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} >문정점</button>
          </Link>
        </div>
      </div>
      <>
        <Routes>
        <Route path='/' element={<div>시작페이지임</div>}></Route>
      </Routes>
      </>
    </div>
  );
}


export default App;
