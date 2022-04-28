
const Input = ({name,type,placeholder,autoComplete}) =>{
    
    return(
        
        <label form={name}>
            {name}
            <input type={type} id={name} placeholder={placeholder} autoComplete={autoComplete} name={name}   required/>
        </label>
        
            
        
    )
}

export {Input};