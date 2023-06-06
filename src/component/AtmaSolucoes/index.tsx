import { useContext  } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'



export function AtmaSolucoes(){


  return(
      <div className={styles.container}>
        <img src="/ATMA_LOGO_PRINCIPAL.png" width={250}  />
      </div>
  )
}