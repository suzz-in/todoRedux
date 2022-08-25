# ✔️ Redux 이용한 MY Todo List
___ 
<img src="https://user-images.githubusercontent.com/110365677/186403234-d6d1f4a8-a755-4d56-ace6-bb907a82b723.png" width="800" height="600">
이노베이션 캠프 리액트기초주차에 진행했던 과제를 Redux를 이용하여 리팩토링했습니다  
  
___  
## 📂컴포넌트 구조  
___  
* src  
   + components (컴포넌트를 모은 폴더)  
     - Form.jsx  
     - Header.jsx  
     - Layout.jsx  
     - List.jsx  
     - Todo.jsx 
     - Detail.jsx  
       
   + Pages (페이지들을 모은 폴더)  
     - TodoList.jsx (페이지를 보여줌)  
       
   + redux  
     - configStore.js (store저장)   
     - modules  
        + mytodo.js (리듀서)  
* App.js  
* index.js(라우팅하기 위한 페이지)  
  
___  
## ⚙구현기능  
___  
* ```Redux``` 이용 전역상태 관리 (todo 데이터를 리덕스로 전역 상태관리 !)  
* ```Router```를 이용 상세 페이지로 이동  
___  
## 💥Error  
___  
#### index.js  
* todo 상세보기 눌러도 url만 바뀌고 페이지 이동 안되는 에러 발생  

~~~
    <BrowserRouter>
      <Provider store={store}>  
        <App />  
      </Provider>  
    </BrowserRouter>  
~~~
    
 같은 팀원분의 도움을 받아 ```<BrowserRouter>``` -> ```<Routes>``` -> ```<Route>``` 순으로 감싸줘야하는 것을 알았다 !  
   
 ➡➡ 
 ~~~
 <BrowserRouter>  
    <Provider store={store}>  
      <Routes>  
        <Route path={"/"} element={<App />} />  
        <Route path={"detail/:id"} element={<Detail />} />  
      </Routes>  
    </Provider>  
  </BrowserRouter>  
~~~
  위와 같이 수정 완료하여 에러 해결하였다.  
___   
## 😭개선해야할 점  
___   
* 에러가 났을 땐 이전으로 돌아가서 console.log()를 찍어보자..(아니 생활화 하자..멘탈이 나가서 똑같은걸 계속 만지고 있었다.)  
* ```Redux```적용 개념을 더 꼼꼼히 공부해야겠다. 머리로는 이해했는데 코드를 짤려니 뒤죽박죽했다. 아무래도 정확하게 이해한것같지 않다.
* 무조건 높은 버전의 패키지가 좋은것은 아니다. 때로는 다운그레이드를 해야할 수 있으니 패키지 설치 전 미리 알아보자  
___   
## 💪도움을 준 팀원  
___   
[이요한] https://github.com/LEE-YO-HAN/My-todo  
[전혜림] https://github.com/hyelim-JEON/todolistRedux
