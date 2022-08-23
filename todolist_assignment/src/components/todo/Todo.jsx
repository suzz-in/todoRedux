import React from "react"
import './style.css'
import { useNavigate } from "react-router-dom";



function Todo({todo, onDeleteHanlder, onEditHandler }) {
    const navigate = useNavigate();
    return (
        <div className="todo_container" key={todo.id}>
            <h6 onClick={()=> navigate("/detail/",${todo.id})}>상세보기</h6>

            <h2>{todo.title}</h2>
            <p>{todo.body}</p>
           
            <button onClick={()=>onDeleteHanlder(todo.id)} className="del_btn">삭제하기</button>
            <button onClick={()=>onEditHandler (todo.id)} className="compl_btn">{todo.isDone ? "취 소" : "완 료"}</button>
        </div>
    )
}

export default Todo;