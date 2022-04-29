
const List = ({listItem,typeList,className}) => {
    const createList = listItem.map(item => <li key={item}>{item}</li>);
    const createTypeList = typeList === 'ol' ? <ol>{createList}</ol>:
                           typeList === 'ul' ? <ul>{createList}</ul>:
                           <li>{createList}</li>
    return(
        <div className={className}>
            {createTypeList}
        </div>
    )
}

List.defeaultsprops ={
    listItem: [],
    typeList: '',
}

export {List};