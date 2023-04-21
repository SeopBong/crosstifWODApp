import './App.css';
import { useState } from 'react';
import { Routes, Route, Link, Navigate  } from 'react-router-dom'
import Main from './Main';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from './Data';
import DailyWod from './DailyPage';




function App() {

   
  return (
    <div className="App">

    <Navbar className='nav-bar' bg="white" variant="light">
        <img className='mainlogo1' src='./crossfitable.jpg' ></img>
        <Container className='nav-container'>
          <Navbar.Brand href="/">Crossfit ABle</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Daily">WOD</Nav.Link>
            <Nav.Link href="#features">Record</Nav.Link>
            <Nav.Link href="#pricing">Ranking</Nav.Link>
          </Nav>
        </Container>
        <div>Login 할 자리</div>
      </Navbar>


      <Routes>

        <Route path='/' element={
          <div className='container-bg'>
          <img className='main-bg' src='./AbleBackground.jpg' ></img>
          <h1>알고리즘을 따라</h1>
          <h2>이것을 만들었노라</h2>
          <div>본문에 들어가기 앞서</div>
        </div>
        
        }></Route>


        <Route path='/Daily' element={<DailyWod/>}></Route>
      </Routes>
   
      
    
    </div>
  );
}

export default App;
