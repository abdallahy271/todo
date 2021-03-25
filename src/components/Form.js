import React,{ useState } from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Search from './Search'

const Form = ({inputText, setInputText, todos, setTodos, setStatus, startDate, setStartDate, endDate, setEndDate }) => {

  const [showSearch, setShowSearch] = useState(false)

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        if (inputText){
          let d = new Date().toLocaleDateString("en-US").split("/")
        setTodos([
          ...todos,
          {text:inputText, completed:false, isEditing:false, id: Math.random()*1000, createdAt: d}
        ])
        setInputText("")
      }
    }

    const statusHandler = (e) => {
      setStatus(e.target.value)
      }

    return (
    <form>
    <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
    <button onClick={submitTodoHandler} className="todo-button" type="submit">
      <i className="fas fa-plus-square"></i>
    </button>

    <button type='button' onClick={()=>setShowSearch(!showSearch)}className="todo-button">
    <DateRangeIcon />
    </button>
    {showSearch && 
    <Search 
    startDate={startDate}
    setStartDate={setStartDate}
    endDate={endDate} 
    setEndDate={setEndDate}
    setStatus={setStatus}
    setShowSearch={setShowSearch}
    showSearch={showSearch}
    />}


    <div className="select">
      <select onChange={statusHandler} name="todos" className="filter-todo">
        <option value="today">Today</option>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>
    )
}

export default Form;