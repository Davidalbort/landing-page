import { Section } from "../Section/Section";
import styles from '../../../src/styles/container/main.module.scss'

const Main = (main) =>{
    const mains = main.main;
    const {section1,section2,section3,section4,section5,section6,section7,section8,section9,section10}= mains;

       
    return(
        <main className={styles.container}>

            <div>

            </div>
            <Section
                className={styles.section1}
                headingType={section1.typeTitle}
                titleHeading={section1.tytle}
                listItem={[]}
            />

            

            <Section
            headingType={section2.typeTitle}
            titleHeading={section2.tytle}
            paragraph={section2.paragraph}
            id={section2.id}
            listItem={[]}
            className={`${styles.section2} ${styles.section4}`}
            />

            <Section
            headingType={section3.typeTitle}
            titleHeading={section3.tytle}
            paragraph={section3.paragraph}
            listItem={[]}
            className={`${styles.section2} ${styles.section4}`}
            />

            <Section
            headingType={section4.typeTitle}
            titleHeading={section4.tytle}
            paragraph={section4.paragraph}
            listItem={section4.list}
            typeList={section4.typeList}
            className={styles.section5}
                />

            <Section
            headingType={section5.typeTitle}
            titleHeading={section5.tytle}
            paragraph={section5.paragraph}
            listItem={[]}
            className={`${styles.section2} ${styles.section4}`}
                />

            <Section
            headingType={section6.typeTitle}
            titleHeading={section6.tytle}
            paragraph={section6.paragraph}
            listItem={[]}
            className={`${styles.section2} ${styles.section4}`}
                        />

            <Section
            headingType={section7.typeTitle}
            titleHeading={section7.tytle}
            listItem={section7.list}
            typeList={section7.typeList}
            className={styles.section3}
                        />

            <Section
            headingType={section8.typeTitle}
            titleHeading={section8.tytle}
            listItem={section8.list}
            typeList={section8.typeList}
            className={styles.section3}
                        />

            <Section
            headingType={section9.typeTitle}
            titleHeading={section9.tytle}
            listItem={section9.list}
            typeList={section9.typeList}
            className={styles.section3}
                        />

            <Section
            headingType={section10.typeTitle}
            titleHeading={section10.tytle}
            listItem={section10.list}
            typeList={section10.typeList}
            id={'Patrocinadores'}
            className={styles.section6}
            
                    />  

        </main>
    )
}

export {Main};