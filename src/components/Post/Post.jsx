import { Comment } from "../Comment/Comment"
import styles from "./Post.module.css"
import { Avatar } from "../Avatar/Avatar"

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src="https://github.com/JVtristaoAC.png"/>
          <div className={styles.authorInfo}>
            <strong>João Vitor</strong>
            <span>Desenvolvedor Back-end</span>
          </div>
        </div>

        <time title="18 de abril às 15:22h" dateTime="2023-03-11 15:23h">Publicado há 1 hora</time>
      </header>

         <div className={styles.content}>
          <p>  Fala galeraa 👋</p>

          <p>  Acabei de subir mais um projeto no meu portifolio.</p>

          <p><a href="https://github.com/JVtristaoAC">https://github.com/JVtristaoAC </a></p>

          <p>
            <a href="https://github.com/JVtristaoAC?tab=repositories"> #novoprojeto</a> {' '}
            <a href="https://github.com/JVtristaoAC/Star_Raze.git"> #star_raze </a> {' '}
            <a href="https://github.com/JVtristaoAC/Star_Raze.git"> #tcc_etec </a>
          </p>
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