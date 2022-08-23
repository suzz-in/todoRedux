import React from 'react'
import './style.css'
// 부모컴포넌트에서 값 받아온다 props로 
function Layout(props) {
    return (
        <div className='layout'>
            {props.children}
        </div>
    )
}
export default Layout
