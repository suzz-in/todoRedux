import React from "react";
import styled from "styled-components";
// 여긴 그냥 보여지는 부분만 있음 신경 x
function Header() {
    return (
        <HeadContainer>
            <div>My Todo List</div>
            <div>React</div>
        </HeadContainer>
    )
}
export default Header;

const HeadContainer = styled.div`
border: 1px solid rgb(221, 221, 221);
height: 60px;
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
padding: 0px 20px;
margin-bottom: 24px;
`