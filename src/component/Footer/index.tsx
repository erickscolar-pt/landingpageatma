import { Header } from "@/component/Header";
import styles from './styles.module.scss'
import Link from "next/link";


export default function Footer(){

    


    return(
        <footer className={styles.container}>
            <div className={styles.top}>
                <div className={styles.linksuteis}>
                    <img src="/logo-footer.png"/>
                    <span>LINKS ÚTEIS</span>
                    <Link href={"/"}>SOBRE NÓS</Link>
                    <Link href={"/"}>FAÇA ACORDO</Link>
                    <Link href={"/"}>POLÍTICA DE PRIVACIDADE</Link>
                    <Link href={"/"}>OPORTUNIDADE DE EMPREGO</Link>
                </div>
                <div className={styles.sociais}>
                    <span>SIGA-NOS</span>
                    <div className={styles.redessociais}>
                        <Link href={"/"}>
                            <img src="/facebook.png" />
                        </Link>

                        <Link href={"/"}>
                            <img src="/instagram.png"/>
                        </Link>

                        <Link href={"/"}>
                            <img src="/youtube.png"/>
                        </Link>
                        
                        <Link href={"/"}>
                            <img src="/linkedin.png"/>
                        </Link>

                    </div>
                </div>
            </div>    
            <div className={styles.cop}>
                <span>@COPYRIGHT 2023 | ATMA SERVIÇOS FINANCEIROS E ATENDIMENTO LTDA. CNPJ 08.746.962/0001-04 - TODOS OS DIREITOS RESERVADOS.</span>
            </div>
        </footer>

    )
}