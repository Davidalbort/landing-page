
const Select = ({name,options,autoComplete}) =>{
    const createOptions = options.map(option => <option value={option}></option>)
    return(
        
        <label form={name}>
            {`* ${name}`}
            <input list={name} required autoComplete={autoComplete}/>
            <datalist id={name}>
                
                {createOptions}
            </datalist>
        </label>
        
            
        
    )
}

export {Select};