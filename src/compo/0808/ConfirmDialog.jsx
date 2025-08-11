import Button from "./Button"

function ConfirmDialog() {
    return (
        <div>
            <p>내용을 확인 했으면 확인을 눌러라</p>
            <Button color='green' children="확인" fsize="1"></Button>
            <Button color='red' children="취소" fsize="5"></Button>
            <Button color='blue' children="결과" fsize="2"></Button>
        </div>
    )
}

export default ConfirmDialog