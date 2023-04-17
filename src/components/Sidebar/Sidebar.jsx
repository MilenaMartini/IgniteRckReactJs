import React from 'react';
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
      src="https://images.unsplash.com/photo-1680458842171-6dbeced420f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>

    <div className={styles.profile}>
    <strong > Nome </strong>
    <span> Profissão</span>
    </div>

    <footer>
      <a href='#'>Edite seu perfil</a>
    </footer>
    </aside>
  )
}