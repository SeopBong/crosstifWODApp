

import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import Collapse from 'react-bootstrap/Collapse';

import { Routes, Route, Link, Navigate  } from 'react-router-dom'



function DailyWod() {
    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
      };

    const [active, setActive] = useState("#link1");
    const [openCollabse1, setOpenCollabse1] = useState(false);
    const [openCollabse2, setOpenCollabse2] = useState(false);
    
    const handleSelect = (key) => {
        setActive(key);
    };

    return(


      <><Button className='wod-collabse-btn' onClick={() => 
        setOpenCollabse1(!openCollabse1)}
        aria-controls="example-collapse-text"
        aria-expanded={openCollabse1}
      >230420 “Build bar”
      </Button>

      <Collapse in={openCollabse1}>
        <div id="example-collapse-text">
          <h1>Today’s workout</h1>
          <h2>​“Build bar”​</h2>
          <h3>For time of</h3>
          <p>21 Front squat</p>
          <p>9 Burpee over bar</p>
          <p>21 Front squat</p>
          <p>9 Burpee pull up</p>
          <p>21 Front squat</p>
          <p>9 Bar muscle up</p>
          <p>Rx’d 135#/95#</p>
          

        </div>
      </Collapse>

      <div></div>
      <Button className='wod-collabse-btn' onClick={() => 
      setOpenCollabse2(!openCollabse2)}
        aria-controls="example-collapse-text"
        aria-expanded={openCollabse2}
      >230419 “Bbang shuttle”
      </Button>

      <Collapse in={openCollabse2}>
        <div id="example-collapse-text">
          <h1>Today’s workout</h1>
          <h2>​“Bbang shuttle”​</h2>
          <h3>5 Round</h3>
          <p>3min AMRAP</p>
          <p>10 Burpee</p>
          <p>10 Shuttle run(5mX2=1)</p>
          <p>Row for max calories</p>
          <p>Rest 3min</p>
        </div>
      </Collapse>


        <ListGroup activeKey={active} onSelect={handleSelect} className='daily-wod-list'>
          {/* <ListGroup.Item action href="#link1" activeKey="#link1" Link to="">
            230417 “EMOM”
          </ListGroup.Item>
          <ListGroup.Item action href="#link2" activeKey="#link1">
            230414 “Jackie”
          </ListGroup.Item>
          <ListGroup.Item action href="#link3" activeKey="#link1">
            230418 “Team workout”
          </ListGroup.Item> */}
          <ListGroup.Item action onClick={alertClicked}>
            This one is a button
          </ListGroup.Item>
        </ListGroup></>
  );
}
export default DailyWod;