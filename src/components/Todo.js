import React from 'react';

const Todo = ({todo, text, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return ({
                    ...item, completed:!item.completed
                })
            }
            return item
        } 
        ))
    }

    const editHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return ({
                    ...item, isEditing:!item.isEditing
                })
            }
            return item
        } 
        ))
    }

    const editChangeHandler = (e) => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return ({
                    ...item, text: e.target.value
                })
            }
            return item
        }))
    }

    const editingList = (
        <>
        <input defaultValue={text} onChange={editChangeHandler} type="text" className="todo-input" />
        <button onClick={editHandler} className='edit-btn'>
            <i className="fas fa-save"></i>
        </button>

        </>
    )

    const viewingList = (
        <>
        <li className = {`todo-item ${todo.completed ? 'completed' : ''}`}> {text} </li>
        <button onClick={completeHandler} className='complete-btn'> 
                <i className='fas fa-check'> </i>
        </button>
        <button onClick={editHandler} className='edit-btn'>
            <i className="fas fa-edit"></i>
        </button>
        </>
    )

    return(
        <div className='todo'>
            {todo.isEditing ? editingList : viewingList}
            
            <button onClick={deleteHandler} className='trash-btn'> 
                <i className='fas fa-trash'> </i>
            </button>
            
        </div>

    )

}

export default Todo;