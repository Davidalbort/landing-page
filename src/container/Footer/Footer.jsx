import { LinkedIcon } from "../../components/Linked-Icon/LinkedIcon";
import { Logo } from "../../components/Logo/Logo";
import styles from '../../styles/container/footer.module.scss'

const Footer = () =>{
    
    const href = "https://www.taxislibres.com.co";
    const src = "https://www.taxislibres.com.co/public/imagesNew/logo_escritorio.png";
    const list= [{iconLink:'https://www.facebook.com/taxislibrescol', icon:'fa-brands fa-facebook-f'},
                 {iconLink:'https://twitter.com/TaxisLibresCol', icon:'fa-brands fa-twitter'},
                 {iconLink:'https://www.instagram.com/accounts/login/?next=/taxislibres/', icon:'fa-brands fa-instagram'},
                 {iconLink:'https://www.youtube.com/user/TaxisLibresCol', icon:'fa-brands fa-youtube'},
                 {iconLink:'https://www.tiktok.com/@taxislibres', icon:'fa-brands fa-tiktok'},]
                 
                 

    return(
        <footer className={styles.container}>

            <Logo
                href={href}
                src={src}
                alt={'Logo de taxis Libres'}
                
            />

            <span className={styles.span}>© 2019 - 2022 Taxis Libres.</span>

            <LinkedIcon
                list={list}
                className={styles.icon}
            />

        </footer>
    )
}

export {Footer};