function Car(props) {
    return (
        <div className="car-size-small"> {props.co}차 {props.name} <img src={props.imgC} width={"150"} height={"120"} style={{ objectFit: "cover" }} alt={props.name}></img></div>
    )
}
export default Car