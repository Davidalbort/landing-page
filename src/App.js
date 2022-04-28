
import './App.css';
import { Header } from './container/Header/Header';
import {informationInSpanish} from '../src/services/pages'
import { Section } from './container/Section/Section';
import { Form } from './container/Form/Form';
import { Footer} from '../src/container/Footer/Footer'

function App() {
  const spanish = {...informationInSpanish}
  // console.log(spanish);
  const {optionListNavigation,section1,section2,section3,section4,section5,section6,section7,section8,section9,section10,formulary}= spanish;
  // console.log(formulary);


  return (
    <div className="App">

      <Header
        options={optionListNavigation}
      />

      <main>


        <Section
          headingType={section1.typeTitle}
          titleHeading={section1.tytle}
          listItem={[]}
        />

        <Section
          eadingType={section2.typeTitle}
          titleHeading={section2.tytle}
          paragraph={section2.paragraph}
          id={section2.id}
          listItem={[]}
        />

        <Section
          eadingType={section3.typeTitle}
          titleHeading={section3.tytle}
          paragraph={section3.paragraph}
          listItem={[]}
        />

        <Section
          eadingType={section4.typeTitle}
          titleHeading={section4.tytle}
          paragraph={section4.paragraph}
          listItem={section4.list}
          typeList={section4.typeList}
              />

        <Section
          eadingType={section5.typeTitle}
          titleHeading={section5.tytle}
          paragraph={section5.paragraph}
          listItem={[]}
              />

        <Section
          eadingType={section6.typeTitle}
          titleHeading={section6.tytle}
          paragraph={section6.paragraph}
          listItem={[]}
                    />

        <Section
          eadingType={section7.typeTitle}
          titleHeading={section7.tytle}
          listItem={section7.list}
          typeList={section7.typeList}
                    />

        <Section
          eadingType={section8.typeTitle}
          titleHeading={section8.tytle}
          listItem={section8.list}
          typeList={section8.typeList}
                    />

        <Section
          eadingType={section9.typeTitle}
          titleHeading={section9.tytle}
          listItem={section9.list}
          typeList={section9.typeList}
                    />

        <Section
          eadingType={section10.typeTitle}
          titleHeading={section10.tytle}
          listItem={section10.list}
          typeList={section10.typeList}
                    />  

        <Form
          options={formulary}
        />

        <Footer/>


      </main>

    </div>
  );
}

export default App;
