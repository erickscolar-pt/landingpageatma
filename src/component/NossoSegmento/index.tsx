import { useContext  } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'



export function NossoSegmento(){


  return(
      <div className={styles.container}>
        <h1>Nosso <span>&nbsp;Segmento</span></h1>
        <div className={styles.nossosegmento}>
          <img src="/Icone-Segmento-Bens-300x300.png"   />
          <img src="/Icone-Segmento-Financeiro-300x300.png"   />
          <img src="/Icone-Segmento-Telefonia-300x300.png"   />
          <img src="/Icone-Segmento-Tv-300x300.png"   />
          <img src="/Icone-Segmento-Varejo-300x300.png"   />
          <img src="/Icone-Segmento-Educacional-300x300.png"   />
        </div>
      </div>
  )
}