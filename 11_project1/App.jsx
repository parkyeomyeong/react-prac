import { React, useCallback, useRef, useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 하기",
      checked: true,
    },
    {
      id: 3,
      text: "일정관리 앱 만들기",
      checked: false,
    },
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const nextTodos = todos.concat({
        id: nextId.current,
        text, //따로 처리 안해도 값만 넣어도 이렇게 받아주네?
        checked: false,
      });

      setTodos(nextTodos);
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (removeId) => {
      const nextTodos = todos.filter((item) => item.id != removeId);
      setTodos(nextTodos);
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      console.log(id);
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
