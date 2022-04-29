
const Link = ({listLink,typeList,className}) =>{
    const createListLink = listLink.map(link => <a className={className} key={link} href={`#${link}`}>{link}</a>)
    let createTypeList = typeList === 'ol' ? <ol>{createListLink}</ol>:
                       typeList === 'ul' ? <ul>{createListLink}</ul>:
                       <li>{createListLink}</li>
    return(
        <div >
            {createTypeList}
        </div>
    )
}

Link.defaultProps ={
    listLink: [''],
    typeList:''
}

export {Link};