import { Comment } from "../Comment/Comment"
import styles from "./Post.module.css"

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar}
            src="https://github.com/MilenaMartini.png"
          />
          <div className={styles.authorInfo}>
            <strong>Milena Martini</strong>
            <span>Desenvolvedora Front-end</span>
          </div>
        </div>

        <time title="18 de abril às 15:22h" dateTime="2023-03-11 15:23h">Publicado há 1 hora</time>
      </header>

         <div className={styles.content}>
          <p>  Fala galeraa 👋</p>

          <p>  Acabei de subir mais um projeto no meu portifolio.</p>

          <p><a href="">github.com/MilenaMartini </a></p>

          <p>
            <a href=""> #novoprojeto</a> {' '}
            <a href=""> #nlw </a> {' '}
            <a href=""> #rocketseat </a>
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