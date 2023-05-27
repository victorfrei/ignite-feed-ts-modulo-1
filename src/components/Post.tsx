
import { PaperPlaneTilt } from '@phosphor-icons/react';
import styles from './Post.module.css';
import { ProfileAvatar } from './ProfileAvatar';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { v4 } from 'uuid';

export interface PostProps {
    id: number;
    author: {
        name: string;
        role: string;
        avatarUrl: string;
    },
    publishedAt: Date;
    content: {
        type: string | "paragraph" | "link";
        content: string;
    }[];
}


export function Post({ author, publishedAt, content }: PostProps) {

    const [comments, setComments] = useState([
        { id: v4(), content: "Post muito bom!!" }
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateNewComment(e: FormEvent) {
        e.preventDefault();
        setComments([...comments, { id: v4(), content: newCommentText }]);
        setNewCommentText('');
    }

    function handleCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
        e.target.setCustomValidity("");
        setNewCommentText(e.target.value)
    }
    function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
        e.target.setCustomValidity("Esse campo é obrigatório")
        console.log(e)
    }

    function deleteComment(id: string) {
        const commentsWithoutDeletedOne = comments.filter((comment) => {
            return comment.id !== id
        })
        setComments(commentsWithoutDeletedOne)
    }

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })


    const isNewCommentEmpty = newCommentText.length == 0;



    return (
        <article className={styles.post}>
            <header>
                <div className={styles.header}>
                    <ProfileAvatar name={author.name} role={author.role} type='Horizontal' src={author.avatarUrl} />

                    <time className={styles.timeAgo} title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >
                        {publishedDateRelativeToNow}
                    </time>
                </div>
            </header>

            <div className={styles.content}>

                {content.map((line) => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type == 'link') {
                        return <p key={line.content}>👉 <a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong className={styles.commentTitle}>Deixe seu feedback</strong>
                <textarea
                    className={styles.commentInput}
                    onChange={handleCommentChange}
                    value={newCommentText}
                    placeholder='Deixe um comentário'
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        <PaperPlaneTilt size={20} />
                        Publicar
                    </button>
                </footer>

            </form>

            <div className='commentList'>
                {comments.map((comment) => <Comment key={comment.id} {...comment} onDeleteComment={deleteComment} />)}
            </div>

        </article>
    )
}