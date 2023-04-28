//paginas e componentes
import {Header} from "./components/Header/Header"
import { Post } from "./components/Post/Post"

//estilos
import "./Global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar/Sidebar"

/*author: { avatar_url: "", name:"", role: "" }
  publishedAt: Date
  content: String
  */

  /*
  <p>  Fala galeraa 👋</p>

          <p>  Acabei de subir mais um projeto no meu portifolio.</p>

          <p><a href="https://github.com/JVtristaoAC">https://github.com/JVtristaoAC </a></p>

          <p>
            <a href="https://github.com/JVtristaoAC?tab=repositories"> #novoprojeto</a> {' '}
            <a href="https://github.com/JVtristaoAC/Star_Raze.git"> #star_raze </a> {' '}
            <a href="https://github.com/JVtristaoAC/Star_Raze.git"> #tcc_etec </a>
          </p>
   */

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/JVtristaoAC.png',
        name: 'João Vitor',
        role: 'Desenvolvedor Back-end'
      },
      content: [
        {type: 'paragraph', content: ' Fala galeraa 👋', },

        {type: 'paragraph', content:' Acabei de subir mais um projeto no meu portifolio.'},

        {type: 'link', content:'github.com/JVtristaoAC">https://github.com/JVtristaoAC'},
      ],
      publishedAt: new Date('2023-04-27 15:10:00')
    }, 
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/MilenaMartini.png',
        name: 'Milena Martini',
        role: 'Desenvolvedor Front-end'
      },
      content: [  
        {type: 'paragraph', content: ' Fala galeraa 👋'},

        {type: 'paragraph', content:' Acabei de subir mais um projeto no meu portifolio.'},

        {type: 'link', content:'github.com/JVtristaoAC">https://github.com/JVtristaoAC'},
      ],
      publishedAt: new Date('2023-04-30 15:10:00')
    },
  ];

function App() {

  return (
    <div>
    <Header  />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
          { posts.map(post => {
            return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
      </main>
    </div>
   </div>
  )
}
export default App
