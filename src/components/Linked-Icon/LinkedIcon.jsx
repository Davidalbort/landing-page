import '../../assets/icons/font-awesome.css'

const LinkedIcon = ({list,className}) => {
    const createLinkedIcon = list.map(linkedIcon => <a href={linkedIcon.iconLink}><i className={linkedIcon.icon}></i></a>); 
    
    return(
        <div className={className}>
        {createLinkedIcon}
        </div>
    )
}


export {LinkedIcon};