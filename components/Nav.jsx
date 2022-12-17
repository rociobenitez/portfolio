import Link from 'next/link'
import { Avatar } from '@nextui-org/react'
import { menuItems } from '../data'
import { SmallButton, ActiveLink } from '.'
import styles from './Nav.module.css'

export const Nav = () => {

    const Logo = (
        <>
            <Link href="/" aria-label="home" className={styles.logo}>
                <Avatar
                    size='lg'
                    src="/assets/ilustracion-rocio.png"
                    zoomed
                    css={{ bg: 'transparent'}}
                />
            </Link>
        </>
    );

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                { Logo }
                <div className={styles.divNavbar}>
                    {
                        menuItems.map( ({ text, href }) => (
                            <li key= { href } className={styles.navItem}>
                                <ActiveLink  text = { text } href = { href } />
                            </li>
                        ))
                    }
                    <li className={styles.navItemBtn}>
                        <SmallButton href='/assets/cv-RocioBenitezGarcia.pdf' text='CV'/>
                    </li>
                </div>
            </nav>
        </header>
    )
}