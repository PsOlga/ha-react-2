function Greeting({name, fontColor, fontSz}){
const styles = {
    color: fontColor,
    fontSize: fontSz,
}
    return (
        <h3 style={styles}>Привет {name}</h3>
    )
}
export default Greeting;