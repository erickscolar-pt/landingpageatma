import styles from './styles.module.scss'
import Link from "next/link";


export default function Footer() {




    return (
        <footer className={styles.container}>
            <div className={styles.top}>
                <div className={styles.linksuteis}>
                    <img src="/logo-footer.png" />
                    <span>LINKS ÚTEIS</span>
                    <Link href="/">SOBRE NÓS</Link>
                    <Link href="https://facaacordo.com.br/home" target="_blank">FAÇA ACORDO</Link>
                    <Link href="/">POLÍTICA DE PRIVACIDADE</Link>
                    <Link href="https://www.atmagente.com.br/" target="_blank">OPORTUNIDADE DE EMPREGO</Link>
                </div>
                <div className={styles.sociais}>
                    <span>SIGA-NOS</span>
                    <div className={styles.redessociais}>
                        <Link href="https://www.facebook.com/atmabpo/" target="_blank">
                            <img src="/facebook.png" />
                        </Link>

                        <Link href="https://www.instagram.com/atmabpo/" target="_blank">
                            <img src="/instagram.png" />
                        </Link>

                        <Link href="https://www.youtube.com/channel/UCT95g7Nr_33io2Gsbgx1JVg" target="_blank">
                            <img src="/youtube.png" />
                        </Link>

                        <Link href="https://www.linkedin.com/company/atmabpo/" target="_blank">
                            <img src="/linkedin.png" />
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