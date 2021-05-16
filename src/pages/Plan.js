import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import TodoList from '../components/TodoList'
import Header from  '../components/Header'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Plan() {

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("today")
  const [filteredTodos, setFilteredTodos] = useState([])
  const [startDate, setStartDate ] = useState(new Date())
  const [endDate, setEndDate ] = useState(new Date())


  function daysIntoYear(date){
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(
          todos.filter(todo => todo.completed === true)
        )
      break
      case 'uncompleted':
        setFilteredTodos(
          todos.filter(todo => todo.completed === false)
        )
      break
      case 'search':
        let start = daysIntoYear(startDate)
        let end = daysIntoYear(endDate)
        setFilteredTodos(
          
          todos.filter((todo) => {
            let c = daysIntoYear(new Date(todo.createdAt))
            return(
            ((start <= c) && (c <= end))
            )
          })
        )
      break
      case 'all':
        setFilteredTodos(todos)
      break
      default:
        setFilteredTodos(
        todos.filter((todo) => {
          let c = daysIntoYear(new Date(todo.createdAt))
          return(
          (c === daysIntoYear(new Date()))
          )
        })
      )
      break
  } 
}


useEffect(() => {
  getLocalTodos()
},[])

  useEffect(() => {
    filterHandler();
    saveLocalTodos()
  },[ todos, status, startDate, endDate, daysIntoYear(new Date()) ])

  const saveLocalTodos = () =>{
    
      localStorage.setItem('todos',JSON.stringify(todos))

  }

  const getLocalTodos = () =>{
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  return ( 
     <>
          <Header />
          <header>
            <h1>Start planning... </h1>
          </header>
          <Form 
          inputText={inputText} 
          setInputText={setInputText} 
          todos={todos} 
          setTodos={setTodos} 
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate} 
          setEndDate={setEndDate}
          setStatus={setStatus} />
          <TodoList 
          todos={todos} 
          setTodos={setTodos} 
          filteredTodos={filteredTodos} />

          <div className="madeBy">
            <Link to={{ pathname: "https://ayusuf-sps-spring21.uc.r.appspot.com" }} target="_blank">
              <Button>Made with ❤️ by Yusuf Abdulmueez</Button>
            </Link>
          </div>
    </>
    
  );
}

export default Plan;
