function Button(props) {
    return (
        // <button className={`bg-${props.color}`}>
        //color는 안먹네.
        <button className={`bg-${props.color}`}>
            <b>
                {props.children}
            </b>
        </button >
    )
}

export default Button