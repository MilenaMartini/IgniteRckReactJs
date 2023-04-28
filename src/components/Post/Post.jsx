import { Comment } from "../Comment/Comment"
import styles from "./Post.module.css"
import { Avatar } from "../Avatar/Avatar"

export function Post({author, publishedAt}) {
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

        <time title="18 de abril às 15:22h" dateTime="2023-03-11 15:23h">{publishedAt.toString()}</time>
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