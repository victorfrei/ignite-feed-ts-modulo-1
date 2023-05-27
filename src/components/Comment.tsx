
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { ProfileAvatar } from './ProfileAvatar';
import { useState } from 'react';

interface CommentProps {
    id: string;
    content: string;
    onDeleteComment: (id: string) => void;
}

export function Comment({ id, content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(id);
    }


    function handleLikeComment() {
        setLikeCount((actualState) => {
            return actualState + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <ProfileAvatar src={'https://github.com/victorfrei.png'} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header className={styles.commentHeader}>
                        <div className={styles.authorAndTime}>
                            <strong>Victor Freire</strong>
                            <time className={styles.timeAgo} title='11 de maio às 08:30' dateTime='2023-05-11 08:30:00'>há 1h</time>
                        </div>
                        <button onClick={handleDeleteComment} className={styles.commentContentButton} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}