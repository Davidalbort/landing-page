
import { Input } from "../../components/Input/Input"
import { Select } from "../../components/Select/Select";

const Form = (options) =>{

    
    console.log(options);
    const option = options.options;
    const {input1,input2,input3,input4,input5,select1,select2,select3,select4,select5} = option;
    
    
    return(
        <form >
            <h1>FORMULARIO</h1>
            <fieldset>

            <h2>Campos obligatorios *</h2>
            <i class="fa-solid fa-input-text"></i>

                <Input
                    name={input1.name}
                    placeholder={input1.placeHolder}
                    type={input1.type}
                    autoComplete={input1.autoComplete}
                />

                <Input
                    name={input2.name}
                    placeholder={input2.placeHolder}
                    type={input2.type}
                    autoComplete={input2.autoComplete}
                />

                <Select
                    name={select1.name}
                    options={select1.options}
                />

                <Input
                    name={input3.name}
                    placeholder={input3.placeHolder}
                    type={input3.type}
                    autoComplete={input3.autoComplete}
                />

                <Select
                    name={select3.name}
                    options={select3.options}
                    autoComplete={select3.autoComplete}
                />

                <Select
                    name={select2.name}
                    options={select2.options}
                    autoComplete={select2.autoComplete}
                />

                <Input
                    name={input4.name}
                    placeholder={input4.placeHolder}
                    type={input4.type}
                    autoComplete={input4.autoComplete}
                />

                <Input
                    name={input5.name}
                    placeholder={input5.placeHolder}
                    type={input5.type}
                    autoComplete={input5.autoComplete}
                />

                <Select
                    name={select4.name}
                    options={select4.options}
                    autoComplete={select4.autoComplete}
                />

                <Select
                    name={select5.name}
                    options={select5.options}
                    autoComplete={select5.autoComplete}
                />

                <Input
        
                    type={'submit'}
            
                />  


            </fieldset>


          

        </form>
    )
}

export {Form};