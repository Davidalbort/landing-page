
const Input = ({name,type,placeholder,autoComplete,className,value}) =>{
    
    return(
        
        <label form={name} className={className}>
            {name}
            <input type={type} id={name} placeholder={placeholder} autoComplete={autoComplete} name={name}  value={value} required/>
        </label>
        
            
        
    )
}

export {Input};