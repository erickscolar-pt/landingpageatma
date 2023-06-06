import { Header } from "@/component/Header";
import styles from './styles.module.scss'

export default function NossosParceiros(){
    return(
        <div className={styles.container}>
            <div className={styles.titulo}>
                <h1>NOSSOS PARCEIROS</h1>
            </div>
            <div className={styles.nossosparceiros}>
                <img src="/divida.caedu.png"   />
                <img src="/divida.casasbahia.png"   />
                <img src="/divida.itapeva.png"   />
                <img src="/divida.livelo.png"   />
                <img src="/divida.metalfrio.png"   />
                <img src="/divida.ponto.png"   />
                <img src="/divida.pravaler.png"   />
                <img src="/divida.renner.png"   />
                <img src="/divida.riachuelo.png"   />
                <img src="/divida.solfacil.png"   />
                <img src="/divida.texa.png"   />
                <img src="/divida.veloe.png"   />
                <img src="/divida.soudi.png"   />

            </div>
        </div>
    )
}