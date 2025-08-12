import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0)
    const [textChg, setTextChg] = useState("")
    const [colorChg, setColorChg] = useState("blue")
    const [isOn, setIsOn] = useState(true)
    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState("")

    function addTodoList(){
        if ( textChg.trim() !=""){
            setTodoList([...todoList, textChg]);
            setTextChg("");
            console.log(todoList);
        }
        
    }

    return(
        <>
            <div>{count}</div>
            <button onClick={(e)=>{ setCount( count+1 ); }}>++</button>
            <button onClick={(e)=>{ setCount( count-1 ); }}>--</button>
            <hr />
            <input value={textChg} type="text" placeholder="작성하세요." onChange={(e)=>{ setTextChg( e.target.value); }}></input>
            <button onClick={(e)=>{ addTodoList(); }}> 누르면 추가 입니다.</button>
            <p>작성된 글자는 ' {textChg} ' 입니다</p>
            <ul>
                {
                    todoList.map( (todoArr, index) => (
                        <li key={index}>{todoArr}</li>
                        )
                    )
                }
            </ul>
            <hr />
            <button style={{ background: colorChg, color: "white" }} onClick={(e)=>{ if(colorChg=="blue"){ setColorChg("red");}else{setColorChg("blue")} } }>
                누르면 변합니다.
            </button>
            <button onClick={(e)=>{ setIsOn(!isOn) }}> 버튼 상태 : {isOn ? "True" : "False" } </button>
        </>

    )
}