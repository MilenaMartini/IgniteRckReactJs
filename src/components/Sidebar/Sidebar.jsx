import React from 'react';
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjbm9sb2dpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>

    <div className={styles.profile}>
    <img className={styles.avatar} src="https://github.com/MilenaMartini.png"/>

    <strong > Milena Martini </strong>
    <span> Desenvolvedora Front-end </span>
    </div>

    <footer>
      <a href='#'>Edite seu perfil</a>
    </footer>
    </aside>
  )
}