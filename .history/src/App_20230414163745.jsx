//paginas e componentes
import { Post } from "./Post"
import {Header} from "./components/Header"

//estilos
import "./Global.css"
import styles from "./App.module.css"

function App() {

  return (
    <div>
    <Header  />

    <div className={styles.wrapper}>
      <aside></aside>
      <main>

      </main>
    </div>
   </div>
  )
}
export default App
