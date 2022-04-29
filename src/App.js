

import { Header } from './container/Header/Header';
import {informationInSpanish,informationInEnglish} from '../src/services/pages'

import { Form } from './container/Form/Form';
import { Footer} from '../src/container/Footer/Footer'
import { useState } from 'react';
import { Main } from './container/Main/Main';

function App() {
  const [isEnglishText,setIsEnglishText]=useState(false)
  const currentLanguage = isEnglishText ? {...informationInEnglish} : {...informationInSpanish}
  // console.log(spanish);
  const {optionListNavigation,main,formulary}= currentLanguage;
  


  return (
    <div className=''>

      <Header
        options={optionListNavigation}
        setIsEnglishText={setIsEnglishText}
      />

      <Main
        main={main}
      />

      <Form
        options={formulary}
      />

      <Footer
        
      />


      

    </div>
  );
}

export default App;
