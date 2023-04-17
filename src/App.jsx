//paginas e componentes
import { Post } from "./Post"
import {Header} from "./components/Header/Header"

//estilos
import "./Global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar/Sidebar"

function App() {

  return (
    <div>
    <Header  />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
          <Post
            author="Pessoa 1"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ullam recusandae architecto deleniti enim a accusantium! Vero, odit nostrum debitis aut ipsam quam, non veniam laborum quae aliquam at sequi."
          />

          <Post
              author="Pessoa 2"
              content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ullam recusandae architecto deleniti enim a accusantium! Vero, odit nostrum debitis aut ipsam quam, non veniam laborum quae aliquam at sequi."
          />
      </main>
    </div>
   </div>
  )
}
export default App
