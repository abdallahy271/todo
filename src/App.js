import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Plan from './pages/Plan'
import Booklist from './pages/Booklist';
import Journal from './pages/Journal';
import Notes from './pages/Notes';
import Goals from './pages/Goals';
import AllJournals from './pages/AllJournals';

function App() {
  const [ textCounter, setTextCounter ] = useState('')
  const [ count, setCount ] = useState(0)

  const journal = () => {
    return Array(6)
    .fill()
    .map((_, i) =>(
      <Route path={`/journal-${i}`}>
        <Journal num={i} textCounter={textCounter} setTextCounter={setTextCounter} count={count} setCount={setCount}/>
    </Route>
    ))
  }
  return ( 
    <Router>
    <div className="App">
      <Switch>
        <Route path="/plan">
          <Plan />
        </Route>
        <Route path="/goals">
          <Goals />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/journals">
          <AllJournals/>
        </Route>
        {journal()}
        <Route path="/book-list">
          <Booklist />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
      </div>
    </Router>
  );
}

export default App;
