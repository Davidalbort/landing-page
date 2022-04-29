
import { Input } from "../../components/Input/Input"
import { Select } from "../../components/Select/Select";
import styles from '../../styles/container/form.module.scss'

const Form = (options) =>{

    
    console.log(options);
    const option = options.options;
    const {input1,input2,input3,input4,input5,select1,select2,select3,select4,select5,otros} = option;
    
    
    return(
        <form  id="Formulario" className={styles.container}>
            <h1 className={styles.h1}>{otros.titleForm}</h1>
            <fieldset className={styles.fieldset}>

            <h2 className={styles.h2}>{otros.requiere}</h2>
            <i className="fa-solid fa-input-text"></i>

                <Input
                    name={input1.name}
                    placeholder={input1.placeHolder}
                    type={input1.type}
                    autoComplete={input1.autoComplete}
                    className={styles.label}
                />

                <Input
                    name={input2.name}
                    placeholder={input2.placeHolder}
                    type={input2.type}
                    autoComplete={input2.autoComplete}
                    className={styles.label}
                />

                <Select
                    name={select1.name}
                    options={select1.options}
                    className={styles.label}
                />

                <Input
                    name={input3.name}
                    placeholder={input3.placeHolder}
                    type={input3.type}
                    autoComplete={input3.autoComplete}
                    className={styles.label}
                />

                <Select
                    name={select3.name}
                    options={select3.options}
                    autoComplete={select3.autoComplete}
                    className={styles.label}
                />

                <Select
                    name={select2.name}
                    options={select2.options}
                    autoComplete={select2.autoComplete}
                    className={styles.label}
                />

                <Input
                    name={input4.name}
                    placeholder={input4.placeHolder}
                    type={input4.type}
                    autoComplete={input4.autoComplete}
                    className={styles.label}
                />

                <Input
                    name={input5.name}
                    placeholder={input5.placeHolder}
                    type={input5.type}
                    autoComplete={input5.autoComplete}
                    className={styles.label}
                />

                <Select
                    name={select4.name}
                    options={select4.options}
                    autoComplete={select4.autoComplete}
                    className={styles.label}
                />

                <Select
                    name={select5.name}
                    options={select5.options}
                    autoComplete={select5.autoComplete}
                    className={styles.label}
                />

                <Input
        
                    type={'submit'}
                    className={styles.submit}
                    value={otros.submit}
            
                />  


            </fieldset>


          

        </form>
    )
}

export {Form};