import styles from './styles.module.scss'
import Link from "next/link";

export default function SejaUmAtworker(){
    return(
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h1>SEJA UM <span>&nbsp;ATWORKER</span></h1>
            </div>
            <img src="/seja_um_atworker.png" width={600}  />
            <p>Na ATMA agimos de forma preventiva, 
                buscando e preparando talentos para atender a repentina demanda do mercado. 
                Usamos ferramentas próprias de atração e seleção, 
                que auxiliam no processo de identificação de bons profissionais, 
                aumentando a assertividade em cada processo seletivo</p>
            <Link href="https://www.atmagente.com.br/" target="_blank">TRABALHE CONOSCO</Link>
        </div>
    )
}