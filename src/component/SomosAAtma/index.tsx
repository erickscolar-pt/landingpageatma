import { useContext  } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'



export function SomosAAtma(){


  return(
      <div className={styles.container}>
        <img src="/atma_logo.png"   />
        <h1>PRAZER, SOMOS A<span>&nbsp;ATMA</span>!</h1>
        <p>Entregamos com verdade e prazer Soluções para um atendimento cada vez mais humano.</p>
      </div>
  )
}