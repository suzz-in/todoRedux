import React from "react";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import Detail from "../components/detail/Detail";
import TodoList from "./TodoList";


const Pages = () => {
  return (
    <BrowserRouter>
        <Routes>
      <Route path="/" element={<TodoList />} exact />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
    </BrowserRouter>

  );
};

export default Pages;