import React from "react";
import './style.css';
import Todo from '../todo/Todo';
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../../redux/modules/mytodo";
// import TodoList from "../../pages/Todolist";


function List() {
    const dispatch = useDispatch();
    const todosList = useSelector((state)=>state.mytodo)
    console.log(todosList)
    
    const onEditHandler = (id) => {
        dispatch(toggleStatusTodo(id));
    }

    const onDeleteHanlder = (id) => {
        dispatch(deleteTodo(id));
    }
    // const onDeleteHandler = (selectedId) => {
    //     const remainedTodos = todos.filter((todo)=>{
    //         return todo.id !== selectedId
    //     })
    //     setTodos(remainedTodos)
  //  }

    // const onCompleteHandler = (selectedId) =>{
    //     const newTodos = todos.map((todo)=>{
    //         if (todo.id === selectedId) {
    //             return {...todo, isDone: !todo.isDone}
    //         } else {
    //             return {...todo}
    //         }
    //     })
    //     setTodos(newTodos)
    // }

    return (
        <div className="list-container">
      <h2 className="list-title pb-4">Working.. 🔥</h2>
      <div className="list-wrapper ">
        {todosList.map((todo) => {
          if (!todo.isDone) {
            return <Todo todo={todo} key={todo.id} onEditHandler={onEditHandler} onDeleteHanlder={onDeleteHanlder} />;
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title pb-4">Done🎉</h2>
      <div className="list-wrapper ">
        {todosList.map((todo) => {
          if (todo.isDone) {
            return <Todo todo={todo} key={todo.id} onEditHandler={onEditHandler} onDeleteHanlder={onDeleteHanlder} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
    
export default List;