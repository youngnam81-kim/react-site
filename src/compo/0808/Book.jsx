function Book(props) {
    return (
        <>
            <hr></hr>
            <div>
                <h2>책 이름 : {props.name}</h2>
                <h3>책 가격 : {props.numOfPage}</h3>
            </div>

        </>
    )
}

export default Book