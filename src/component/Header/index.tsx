import { useContext, useState } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { HiDotsVertical } from "react-icons/hi";


export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <img src="/ATMA_LOGO_02_black.png" width={138} />
        </Link>

        <nav className={styles.menuNav}>
          <Link href="/">HOME</Link>
          <Link href="/">FAÇA ACORDO</Link>
          <Link href="/quemsomos">QUEM SOMOS</Link>
          <Link href="/">TRABALHE CONOSCO</Link>
        </nav>
        <div className={styles.dropdown}>
          <HiDotsVertical className={styles.dropbtn} width={20} height={20} />
          <div className={styles.dropdownContent}>
            <Link href="/">HOME</Link>
            <Link href="/">FAÇA ACORDO</Link>
            <Link href="/quemsomos">QUEM SOMOS</Link>
            <Link href="/">TRABALHE CONOSCO</Link>
          </div>
        </div>


      </div>
    </header>




  )
}