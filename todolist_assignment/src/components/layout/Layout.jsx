import React from 'react'
import styled from "styled-components";
// 부모컴포넌트에서 값 받아온다 props로 
function Layout(props) {
    return (
        <LayoutContainer>
            {props.children}
        </LayoutContainer>
    )
}
export default Layout;

const LayoutContainer = styled.div`
max-width: 1200px;
min-width: 800px;
margin: 0px auto;
`