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
          <Post 
           
           author="Milena Martini" 
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ullam recusandae architecto deleniti enim a accusantium! Vero, odit nostrum debitis aut ipsam quam, non veniam laborum quae aliquam at sequi."
      />
   
   <Post 
      author="Mi"
      content="aaaaaa"
    />
      </main>
    </div>
   </div>
  )
}
export default App
