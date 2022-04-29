import React from "react";
import { LanguageToogle } from "../../components/Language_toogle/Language_toogle";
import { Link } from "../../components/Link/Link";
import { Logo } from "../../components/Logo/Logo"
import styles from '../../../src/styles/container/header.module.scss'

const Header = ({options,setIsEnglishText}) =>{
    const href = "https://www.taxislibres.com.co";
    const src = "https://www.taxislibres.com.co/public/imagesNew/logo_escritorio.png";

    return(
        <header className={styles.container}>

            <Logo
                href={href}
                src={src}
                alt={'Logo de taxis Libres'}
                
            />

            <nav className={styles.nav}>
                 <Link
                    listLink={options.list}
                    typeList={options.typeList}
                    className={styles.a}


                />
            </nav>

            <LanguageToogle
                setIsEnglishText={setIsEnglishText}
                className={styles.languageToogle}
            />

        </header>
    )
}

export {Header};