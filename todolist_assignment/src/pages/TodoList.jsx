import React, {useState} from 'react'
import Layout from '../components/layout/Layout'
import Header from '../components/header/Header'
import Form from '../components/form/Form'
import List from '../components/list/List'

function TodoList() {
    // const [todos, setTodos] = useState([
    //     {
    //         id: 1,
    //         title: "우리집 고양이 떼떼",
    //         body: "떼떼 밥 주기",
    //         isDone: false
    //     },
    //     {
    //         id: 2,
    //         title: "우리집 고양이 ",
    //         body: "떼떼 사냥놀이 해주기",
    //         isDone: true
    //     }
    // ])

    return (
        <Layout>
            <Header />
            <Form/>
            <List/>
        </Layout>
    )
}
export default TodoList