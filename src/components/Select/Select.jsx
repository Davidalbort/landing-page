
const Select = ({name,options,autoComplete,className}) =>{
    const createOptions = options.map(option => <option key={option} value={option}></option>)
    return(
        
        <label form={name} className={className}>
            {`* ${name}`}
            <input list={name} required autoComplete={autoComplete}/>
            <datalist id={name}>
                
                {createOptions}
            </datalist>
        </label>
        
            
        
    )
}

export {Select};