
const Input = ({type , label, color, ontype, ...rest})=>{

    return(
        <div>
            
            <label >{label}</label>

            <input type={type} style= {{ color: color}} {...rest} onChange={(e)=>ontype(e)} />

        </div>
    )
}
export default Input
