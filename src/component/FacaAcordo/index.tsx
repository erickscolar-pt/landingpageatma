import { Header } from "@/component/Header";
import styles from './styles.module.scss'

export default function FacaAcordo(){
    return(
        <div className={styles.container}>
            <img src="/faca.acordo_logo.png"   />
            <p>Faça Acordo é uma spin off criada para proporcionar 
                uma experiência mais amigável ao cliente que necessita 
                se relacionar com seus credores. Nosso objetivo é criar 
                uma ponte de negociação. Oferecemos soluções para portais 
                de negociação de dívidas, agentes virtuais e chatbots.</p>
            <button type="button" >SAIBA MAIS</button>
        </div>
    )
}