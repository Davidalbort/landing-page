
const List = ({listItem,typeList}) => {
    const createList = listItem.map(item => <li>{item}</li>);
    const createTypeList = typeList === 'ol' ? <ol>{createList}</ol>:
                           typeList === 'ul' ? <ol>{createList}</ol>:
                           <li>{createList}</li>
    return(
        <div className="">
            {createTypeList}
        </div>
    )
}

List.defeaultsprops ={
    listItem: [],
    typeList: '',
}

export {List};