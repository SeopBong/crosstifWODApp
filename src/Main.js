import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link, Navigate  } from 'react-router-dom'



function Main(){
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
    return(
        <Routes>
        <Route path='/DailyWod' element={ <Main/>}></Route>
        <Route path='/' element={ <div>
          <img className='logo1' src='./crossfitable.jpg'></img>
        <div>
        <Link to="/">  <button className='munjung-btn' style={{ backgroundColor:mainBtnColor, color: textColor}} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} 
           >문정점</button>
           </Link>
        </div>
        </div>}></Route>
        
      </Routes>

    )
}
export default Main;