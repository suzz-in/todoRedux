import React from "react"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



function Todo({todo, onDeleteHanlder, onEditHandler }) {
    const navigate = useNavigate();
    return (
        <Todocontainer key={todo.id}>
            <h6 onClick={()=> navigate(`/detail/${todo.id}`)}>상세보기</h6>

            <Todotitle>{todo.title}</Todotitle>
            <p>{todo.body}</p>
           
            <Delbtn onClick={()=>onDeleteHanlder(todo.id)}>삭제하기</Delbtn>
            <Combtn onClick={()=>onEditHandler (todo.id)} className="compl_btn">{todo.isDone ? "취 소" : "완 료"}</Combtn>
        </Todocontainer>
    )
}

export default Todo;

const Todocontainer = styled.div`
width: 270px;
border: 4px solid teal;
min-height: 150px;
border-radius: 12px;
padding: 12px 24px 24px;
`

const Delbtn = styled.button`
border: 1px solid red;
height: 40px;
width: 120px;
background-color: rgb(255, 255, 255);
border-radius: 12px;
cursor: pointer;
`

const Combtn =styled.button`
border: 1px solid green;
height: 40px;
width: 120px;
background-color: rgb(255, 255, 255);
border-radius: 12px;
cursor: pointer;
&:hover {
  cursor: pointer;
  font-size: calc(100%);
  background-color:black;
  color: white;
}
`

const Todotitle = styled.h2`
display: block;
font-size: 1.5em;
margin-block-start: 0.83em;
margin-block-end: 0.83em;
margin-inline-start: 0px;
margin-inline-end: 0px;
font-weight: bold;
`

