import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment () {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/MilenaMartini.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Milena Martini</strong>
              <time title="18 de abril às 15:22h" dateTime="2023-03-11 15:23h">Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>muito bom, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button><ThumbsUp/>Aplausos <span>20</span></button>
        </footer>

      </div>
    </div>
  )

}