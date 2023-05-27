
import styles from './Sidebar.module.css';
import {PencilLine} from '@phosphor-icons/react'
import CoverImage from '../assets/sidebar/cover.jpg';
import { ProfileAvatar } from './ProfileAvatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                src={CoverImage}
                className={styles.cover}
            />

            <ProfileAvatar name={'Victor Freire'} role={'Web Developer'} type='Vertical' src={'https://github.com/victorfrei.png'} />

            <footer>
                <a href='#'>
                <PencilLine size={20} /> Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}