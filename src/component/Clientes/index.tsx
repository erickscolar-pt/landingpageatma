import { useContext } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'; // Importa o componente Carousel
import Image from 'next/image'; // Importa o componente Image do Next.js
import { CSSTransition } from 'react-transition-group';

const images = [
  {
    src: '/logo_pravaler.png',
    alt: 'PraValer',
    link: '',
    bg: '#ff6315'
  }, {
    src: '/logo_rchlo.png',
    alt: 'Riachuelo',
    link: '',
    bg: '#000'
  }, {
    src: '/logo_renner.png',
    alt: 'Renner',
    link: '',
    bg: '#d51500'
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
          <a className={styles.button} href={image.link} type='button' target='_blank'>SAIBA MAIS</a>
        </div>
      ))}
    </Carousel>
  )
}