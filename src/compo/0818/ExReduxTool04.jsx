import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./js/store_redux_slice"


const ExReduxTool04 = () => {
    const count = useSelector((state) => (state.counter.value));
    const dispatch = useDispatch();
    return (
        <>
            <h3>ExReduxTool04</h3>
            <h3>카운터:{count}</h3>
            <button onClick={() => dispatch(increment())}> +1 </button>
            <button onClick={() => dispatch(decrement())}> -1 </button>
            <button onClick={() => dispatch(reset())}> 리셋 </button>
            <button onClick={() => dispatch(incrementByAmount(5))}> +5 </button>
        </>
    )
}

export default ExReduxTool04