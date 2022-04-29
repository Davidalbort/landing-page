import { List } from "../../components/List/List"

const Section = ({headingType,titleHeading,paragraph,typeList,listItem,className,id}) =>{
    
    let createHeading = headingType === 'h1' ?  <h1> {titleHeading} </h1> :
                        headingType === 'h2' ?  <h2> {titleHeading} </h2> : 
                        headingType === 'h3' ?  <h3> {titleHeading} </h3> :
                                                <h4> {titleHeading} </h4>
    return(
        <section className={className} id={id}>

            {createHeading}

            <p>

                {paragraph}

            </p>

            <List
                key={titleHeading}
                typeList={typeList}
                listItem={listItem}
            />

        </section>
    )
}

export {Section};