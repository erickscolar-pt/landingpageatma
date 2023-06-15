import styles from './styles.module.scss'

export function SobreNos(){
  return(
      <div className={styles.container}>
        <h1>Sobre nós</h1>
        <img src="/atma_vetor_mulher.png" width={450}/>
        <p>Atuamos na área de Contact Center há mais de 16 anos. 
          Oferecemos soluções personalizadas que acompanham as 
          tendências de mercado</p>

        <img src="/Imagem-3-768x768.png" width={450}/>
        <p>Durante este período, conquistamos reconhecimento pelo 
          protagonismo e pelas inovações constantes, fruto do investimento 
          contínuo em tecnologia e principalmente no ser humano.</p>
      </div>
  )
}