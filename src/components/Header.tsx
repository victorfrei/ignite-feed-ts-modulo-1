
import styles from './Header.module.css'

import ingniteLogo from '../assets/ignite-logo.svg';


export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={ingniteLogo} alt='logo do ignite'></img>
                <strong className={styles.headerText}>Ignite Feed</strong>
            </div>
        </header>
    )
}