
const Image = ({src,alt,className}) =>{
    return(
        <figure className={className}>
            <img src= {src} alt={alt}/>
        </figure>
    )
}

Image.defaultProps ={
    src:'',
    alt:'',

}

export {Image};