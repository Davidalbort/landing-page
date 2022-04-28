import { Link } from "../../components/Link/Link";
import { Logo } from "../../components/Logo/Logo"

const Header = ({options}) =>{
    const href = "https://www.taxislibres.com.co";
    const src = "https://www.taxislibres.com.co/public/imagesNew/logo_escritorio.png";

    return(
        <header>

            <Logo
                href={href}
                src={src}
                alt={'Logo de taxis Libres'}
                
            />

            <nav>
                 <Link
                    listLink={options.list}
                    typeList={options.typeList}


                />
            </nav>
        </header>
    )
}

export {Header};