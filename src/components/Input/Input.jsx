
const Input = ({name,type,placeholder}) =>{
    
    return(
        <div>
            <label form={name}>{name}</label>
            <input type={type} id={name} placeholder={placeholder} name={name}/>
        </div>
    )
}

export {Input};