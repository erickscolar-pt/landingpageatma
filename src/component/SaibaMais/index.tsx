import { Header } from "@/component/Header";
import styles from './styles.module.scss'

export default function SaibaMais(){
    return(
        <div className={styles.container}>
            <img src="/atma_vetor_mulher.png" width={600}  />

            <p>Atuamos na área de Contact Center há mais de 16 anos. 
                Oferecemos soluções personalizadas que 
                acompanham as tendências de mercado</p>
            <button type="button" >SAIBA MAIS</button>
        </div>
    )
}