import React, {useState, useRef} from "react"
import styled from "styled-components";
import {useDispatch} from "react-redux"
import { addTodo } from "../../redux/modules/mytodo"


function Form() {
    const dispatch =useDispatch();
    
    //초기값
    const initialState = {id: 0, title: "", body: "", isDone: false} //초기값


    //input통해 값 들어오면 변화 값 받음 
    const [inputTodo, setInputTodo] = useState(initialState)

  //id값 줌
    const nextId = useRef(3)

    const onChangeHandler=(event)=>{

        const {value, name} = event.target 

        setInputTodo({...inputTodo, [name]: value, id: nextId.current})
        nextId.current++ 
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault() 
        nextId.current++; //추가하기 버튼 누르면 id 하나씩 증가..(이게 맞는지 모르곘음)
        dispatch(addTodo({...inputTodo}))
        setInputTodo({id:0, title:"", body:"",isDone: false});  //빈 입력창
        // setTodos([...todos, inputTodo])
        // setInputTodo(initialState) 
    }
   
    return (
        <Formcontainer onSubmit={onSubmitHandler}>
            <Inputcontainer>
                <Label>제목</Label>

                <Titleinput type='text' name="title" onChange={onChangeHandler} value={inputTodo.title} required/> 
                <Label>내용</Label>
                <Titleinput type='text' name="body" onChange={onChangeHandler} value={inputTodo.body}/>
                <Addbtn>추가하기</Addbtn>
            </Inputcontainer>
            
        </Formcontainer>
    )
}
export default Form;

const Formcontainer =styled.form`
background-color: rgb(238, 238, 238);
    border-radius: 12px;
    margin: 0px auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;

`

const Inputcontainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 70px;
box-sizing: border-box;
padding: 25px;
background-color:#eee;
`
const Titleinput = styled.input`
height: 40px;
    width: 240px;
    border: none;
    border-radius: 12px;
    padding: 0px 12px;
`
const Label = styled.label`
font-size: 16px;
font-weight: 700;
`

const Addbtn =styled.button`
background-color: teal;
bottom: none;
border-radius: 10px;
color: #fff;
font-weight: 700;
height: 40px;
width: 140px;
&:hover{
  cursor: pointer;

  width: calc(15%);
}
`