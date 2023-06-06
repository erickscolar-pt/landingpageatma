import { useContext  } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'



export function ModeloDeTrabalho(){


  return(
      <div className={styles.container}>
        <div className={styles.titulo}>
        <h1>MODELO DE <span>&nbsp;TRABALHO</span></h1>
        </div>
        <img src="/modelo_de_trabalho.png" width={1200}/>

      </div>
  )
}