
import styles from './ProfileAvatar.module.css';
import { ImgHTMLAttributes } from 'react';

interface ProfileAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    type?: 'Horizontal' | 'Vertical';
    name?: string;
    role?: string;
}

export function ProfileAvatar({ type, name, role, ...props }: ProfileAvatarProps) {
    return (
        <>
            {
                type == undefined &&
                <img
                    className={styles.avatarDefault}
                    {...props}
                />
            }
            {
                type == "Vertical" &&
                <div className={styles.vertical}>
                    <img
                        className={styles.avatar}
                        {...props}
                    />
                    <strong>{name ?? 'Anonymous'}</strong>
                    <span>{role ?? 'No Role'}</span>
                </div>
            }
            {
                type == "Horizontal" &&
                <div className={styles.horizontal}>
                    <img
                        className={styles.avatar}
                        {...props}
                    />
                    <div className={styles.profileInfo}>
                        <strong>{name ?? 'Anonymous'}</strong>
                        <span>{role ?? 'No Role'}</span>
                    </div>
                </div>
            }
        </>
    )
}