import styles from './styles.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'; // Importa o componente Carousel

const images = [
  {
    src: '/logo_pravaler.png',
    alt: 'PraValer',
    link: 'https://pravaler-atendimento.facaacordo.com.br/',
    bg: '#ff6315'
  }, {
    src: '/logo_riachuelo.png',
    alt: 'Riachuelo',
    link: 'https://riachuelo-atendimento.facaacordo.com.br/',
    bg: '#000000'
  }, {
    src: '/logo_renner.png',
    alt: 'Renner',
    link: 'https://renner-atendimento.facaacordo.com.br/',
    bg: '#ff0002'
  },  {
    src: '/logo_caedu.png',
    alt: 'Caedu',
    link: 'https://caedu-atendimento.facaacordo.com.br',
    bg: '#c3c00f'
  },  {
    src: '/logo_itapeva.png',
    alt: 'Itapeva',
    link: 'https://itapeva-atendimento.facaacordo.com.br',
    bg: '#0a3355'
  },  {
    src: '/logo_metalfrio.png',
    alt: 'Metal Frio',
    link: 'https://metalfrio-atendimento.facaacordo.com.br',
    bg: '#003e86'
  },  {
    src: '/logo_solfacil.png',
    alt: 'Sol Facil',
    link: 'https://solfacil-atendimento.facaacordo.com.br',
    bg: '#000000'
  },  {
    src: '/logo_soudi.png',
    alt: 'Soudi',
    link: 'https://soudi-atendimento.facaacordo.com.br',
    bg: '#f6f5f0'
  },  {
    src: '/logo_texa.png',
    alt: 'Texa',
    link: 'https://texa-atendimento.facaacordo.com.br',
    bg: '#012269'
  },  {
    src: '/logo_veloe.png',
    alt: 'Veloe',
    link: 'https://veloe-atendimento.facaacordo.com.br/',
    bg: '#0a3355'
  },  {
    src: '/logo_ponto.png',
    alt: 'Ponto',
    link: 'https://pontofrio-atendimento.facaacordo.com.br',
    bg: '#000000'
  },  {
    src: '/logo_casasbahia.png',
    alt: 'Casas Bahia',
    link: 'https://casasbahia-atendimento.facaacordo.com.br',
    bg: '#f6f5f0'
  },  {
    src: '/logo_livelo.png',
    alt: 'Livelo',
    link: '#',
    bg: '#ff0099'
  }
];


export function Clientes() {
  return (
    <Carousel
      className={styles.container}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      stopOnHover={true}
    >
      {images.map((image, index) => (
        <div key={index} className={styles.box} style={{ background: image.bg }}>
          <img src={image.src} alt={`Image ${image.alt}`} />
          <a className={styles.button} href={image.link} type='button' target='_blank'>NEGOCIE AQUI</a>
        </div>
      ))}
    </Carousel>
  )
}