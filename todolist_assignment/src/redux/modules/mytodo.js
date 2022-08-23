// widgets.js

// Actions
const CREATE = "mytodo/CREATE";
const DElETE = "mytodo/DELETE";
const UPDATE = "mytodo/UPDATE";

// Action Creators

export const addTodo = (mytodo) => {
  return { type: CREATE, mytodo: mytodo };
};

export const deleteTodo = (mytodo) => {
  return { type: DElETE, mytodo: mytodo };
};

export const toggleStatusTodo = (mytodo) => {
  return { type: UPDATE, mytodo: mytodo };
};
// 초기값 지정
const initialState = [
  {
    id: 1,
    title: "우리집 고양이 떼떼",
    body: "떼떼 밥 주기",
    isDone: false,
  },
  {
    id: 2,
    title: "우리집 고양이 ",
    body: "떼떼 사냥놀이 해주기",
    isDone: true,
  },
];

//Reducer
const mytodo = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      const newTodo = [...state, action.mytodo];
      return newTodo;

    case DElETE:
      // filter로 똑같으면 삭제
      const remainedTodo = state.filter((todo) => todo.id !== action.mytodo);
      return remainedTodo;

    case UPDATE:
      const updatedTodo = state.map((todo) => {
        if (todo.id === action.mytodo) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return { ...todo };
        }
      });
      return updatedTodo;

    default:
      return state;
  }
};

export default mytodo;
// export default function reducer(state = initialState, action = {}) {
//   switch (action.type) {
//     case "mytodo/CREATE":
//       const newTodo = [...state.todos, action.todo];
//       return {
//         ...state,
//         todos: newTodo,
//       };
//     case "mytodo/UPDATE":
//       return {
//         ...state,
//         todos: state.todo.map((todo) => {
//           if (todo.id === action.todo) {
//             return {
//               ...todo,
//               isDone: !todo.isDone,
//             };
//           } else {
//             return todo;
//           }
//         }),
//       };
//     case "mytodo/DELETE":
//       return {
//         ...state,
//         todos: state.todo.filter((todo) => todo.id !== action.todo),
//       };
//     default:
//       return state;
//   }
// }
