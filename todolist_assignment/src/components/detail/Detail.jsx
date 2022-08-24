import React from "react";
import styled from "styled-components";
//params로 아이디 조회하고, navigate로 컴포넌트끼리 연결
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const param = useParams();
  const navigate = useNavigate();

  const todoStore = useSelector((state) => state.mytodo);

  return (
    <Allcontainer>
    <Detailcontainer>
        <div>
        <Headcontainer>
          <h3>ID - {param.id}</h3>
          <Backbtn onClick={() => navigate("/")}>이전으로</Backbtn>
          </Headcontainer>

        {/* useSelector를 통해 가져온 state 요소에 하나하나 접근하여 id일치 여부를 확인 */}        {todoStore.map((todo) => {
          // pram.id의 타입은 문자열, todo.id는 숫자여서 형변환
          if (todo.id === parseInt(param.id)) {
            return (
              <div>
                <Titlebox>{todo.title}</Titlebox>
                <SubTitle>{todo.body}</SubTitle>
                </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      </Detailcontainer>
      </Allcontainer>
  );
}

export default Detail;

const Allcontainer = styled.div`
border: 2px solid rgb(238, 238, 238);
width: 100%;
height: 100vh;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
`


const Detailcontainer = styled.div`
    width: 600px;
    height: 400px;
    border: 1px solid rgb(238, 238, 238);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
`



const Headcontainer = styled.div`
display: flex;
height: 80px;
-webkit-box-pack: justify;
justify-content: space-between;
padding: 0px 24px;
-webkit-box-align: center;
align-items: center;
margin :auto;
`

const Backbtn = styled.button`
border: 1px solid rgb(221, 221, 221);
height: 40px;
width: 120px;
background-color: rgb(255, 255, 255);
border-radius: 12px;
cursor: pointer;
`

const Titlebox = styled.h1`
display: block;
font-size: 2em;
margin-block-start: 0.67em;
margin-block-end: 0.67em;
margin-inline-start: 0px;
margin-inline-end: 0px;
font-weight: bold;
margin-left:2px;
`

const SubTitle = styled.p`
padding: 0px 24px;
`