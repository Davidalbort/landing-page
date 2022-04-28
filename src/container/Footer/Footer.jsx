import { LinkedIcon } from "../../components/Linked-Icon/LinkedIcon";
import { Logo } from "../../components/Logo/Logo";

const Footer = () =>{
    
    const href = "https://www.taxislibres.com.co";
    const src = "https://www.taxislibres.com.co/public/imagesNew/logo_escritorio.png";
    return(
        <footer>

            <Logo
                href={href}
                src={src}
                alt={'Logo de taxis Libres'}
                
            />

            <span>© 2019 - 2022 Taxis Libres.</span>

            <LinkedIcon
                list={[]}
            />

        </footer>
    )
}

export {Footer};