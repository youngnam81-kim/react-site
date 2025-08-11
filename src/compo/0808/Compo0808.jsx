
import Library from './Library.jsx'
import Button from './Button.jsx'
import ConfirmDialog from './ConfirmDialog.jsx'
import BoxList from './BoxList.jsx'
import Garage from './Garage.jsx'

export default function Compo0808() {
    return (
        <>
            <Garage></Garage>
            <hr></hr>
            <BoxList></BoxList>
            <hr></hr>
            <Library></Library>
            <hr></hr>
            {/* <Button children="red" color="red"></Button> */}
            <ConfirmDialog></ConfirmDialog>
            <hr></hr>
            {/* <Book name="html" numOfPage="100"></Book>
            <Book name="js" numOfPage="300"></Book>
            <Book name="java" numOfPage="500"></Book>
            <Book name="xml" numOfPage="700"></Book> */}
        </>
    )
}


