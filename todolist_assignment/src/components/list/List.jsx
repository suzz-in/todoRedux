import React from "react";
import styled from "styled-components";
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
        <Listcontainer>
      <h2 className="list-title pb-4">Working.. 🔥</h2>
      <Listwrap>
        {todosList.map((todo) => {
          if (!todo.isDone) {
            return <Todo todo={todo} key={todo.id} onEditHandler={onEditHandler} onDeleteHanlder={onDeleteHanlder} />;
          } else {
            return null;
          }
        })}
      </Listwrap>
      <h2 className="list-title pb-4">Done🎉</h2>
      <Listwrap>
        {todosList.map((todo) => {
          if (todo.isDone) {
            return <Todo todo={todo} key={todo.id} onEditHandler={onEditHandler} onDeleteHanlder={onDeleteHanlder} />;
          } else {
            return null;
          }
        })}
      </Listwrap>
    </Listcontainer>
  );
}
    
export default List;

const Listcontainer = styled.div`
padding: 20px;
`

const Listwrap = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
`