


const Logo = ({href,src,alt,className}) =>{
    return(
        <a href={href} className={className}>
            <img src={src} alt={alt} className=''/>
        </a>
    )
}

export {Logo};