import {format, formatDistanceToNow} from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";

import styles from "./Post.module.css";

const comments = [
  1,
  2,
  3,
];

export function Post({author, publishedAt, content}) {
   const publisheDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    comments.push(3);

    console(comments);
  }

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

        <time title={publisheDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
          </time>
      </header>

         <div className={styles.content}>
          {content.map(line => {
            if (line.type === 'paragraph'){
              return <p>{line.content}</p>;
            } else if (line.type === 'link') {
              return <p><a href="#">{line.content}</a></p>
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong> deixe seu feedback</strong>
          <textarea
          placeholder="Deixe um comentário"
          />
          <footer>
            <button type="submit">Postar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment />
        })}
        </div>
    </article>
  )
}