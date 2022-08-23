import React, {useState, useRef} from "react"
import './style.css'
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
        <form onSubmit={onSubmitHandler} className="form_container">
            <div className='input_container'>
                <label>제목</label>

                <input type='text' name="title" onChange={onChangeHandler} value={inputTodo.title} required/> 
                <label>내용</label>
                <input type='text' name="body" onChange={onChangeHandler} value={inputTodo.body}/>
                <button>추가하기</button>
            </div>
            
        </form>
    )
}
export default Form;