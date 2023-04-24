//paginas e componentes
import {Header} from "./components/Header/Header"
import { Post } from "./components/Post/Post"

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
          <Post/>

          <Post/>
      </main>
    </div>
   </div>
  )
}
export default App
