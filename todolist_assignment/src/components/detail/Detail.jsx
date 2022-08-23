import React from "react";
//params로 아이디 조회하고, navigate로 컴포넌트끼리 연결
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const param = useParams();
  const navigate = useNavigate();

  const todoStore = useSelector((state) => state.mytodo);

  return (
    <div>
        <div>
        <div>
          <h3>ID - {param.id}</h3>
          <button onClick={() => navigate("/")}>이전으로</button>
          </div>

        {/* useSelector를 통해 가져온 state 요소에 하나하나 접근하여 id일치 여부를 확인 */}        {todoStore.map((todo) => {
          // pram.id의 타입은 문자열, todo.id는 숫자여서 형변환
          if (todo.id === parseInt(param.id)) {
            return (
              <div>
                <h1>{todo.title}</h1>
                <p>{todo.body}</p>
                </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      </div>

  );
}

export default Detail;