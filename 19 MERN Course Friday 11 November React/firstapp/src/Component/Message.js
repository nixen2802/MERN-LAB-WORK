// function Message(){
//     return(
//         <div>
//             This is message with functional component
//         </div>
//     )
// }
// export default Message;
const Message=(props)=>{
    return <h1>Timepass {props.name} {props.fromWhere}</h1>
}
export default Message;