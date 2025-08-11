import Box from "./Box"

function BoxList() {
    return (
        <>
            <h2>설레는 다음 여행을 위한 아이디어</h2>
            <div className="boxContainer">
                <Box size="small"></Box>
                <Box size="small"></Box>
                <Box size="small"></Box>
                <Box size="small"></Box>
            </div>
            <h2>에어비엔비 체험 둘러보기</h2>
            <div className="boxContainerBig">
                <Box size="big"></Box>
                <Box size="big"></Box>
            </div>
        </>
    )
}
export default BoxList
