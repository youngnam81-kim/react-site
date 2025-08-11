import Book from "./Book"

function Library() {
    return (
        <div>
            <Book name="html" numOfPage="100"></Book>
            {/* <Book name="js" numOfPage="300"></Book>
            <Book name="java" numOfPage="500"></Book>
            <Book name="xml" numOfPage="700"></Book> */}
        </div>
    )
}
export default Library