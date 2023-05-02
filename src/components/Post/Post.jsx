import { Comment } from "../Comment/Comment"
import { Avatar } from "../Avatar/Avatar"

import styles from "./Post.module.css"

export function Post({author, publishedAt}) {
  const publisheDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedAt);

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="18 de abril às 15:22h" dateTime="2023-03-11 15:23h">
          {publisheDateFormatted}
          </time>
      </header>

         <div className={styles.content}>
          
        </div>

        <form className={styles.commentForm}>
          <strong> deixe seu feedback</strong>
          <textarea
          placeholder="Deixe um comentário"
          />
          <footer>
            <button type="submit">Postar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
        </div>
    </article>
  )
}