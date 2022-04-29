

 const LanguageToogle = ({setIsEnglishText,className}) => {

    return (
      
        <div className={className}>

            <button onClick={()=> setIsEnglishText(false)}>

                Español

            </button>  
            <button onClick={()=> setIsEnglishText(true)}>

                English

            </button>  

        </div>

  )

}

export {LanguageToogle}