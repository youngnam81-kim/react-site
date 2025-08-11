import { useState } from "react"

export default function TodoList() {
    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    function addTodo() {
        if (todo.trim() != "") {
            setTodoList([...todoList, todo]);
            setTodo("");
        }
    }

    function delTodo(idx) {
        setTodoList(todoList.filter((_, index) => index != (Number(idx) - 1)));
        setTodo("");
    }

    return (
        <>
            <h2>TodoList.jsx</h2>
            <input type="text" placeholder="할일을 적으세요." value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={(e) => {
                addTodo();
            }}>추가</button>
            <button onClick={(e) => {
                delTodo(todo);
            }}>삭제</button> (삭제할 번호를 입력하면 삭제.)
            <ol>
                {
                    todoList.map((todoArr, index) => (
                        <li key={index}>{todoArr}</li>
                    ))
                }
            </ol>
        </>
    )
}