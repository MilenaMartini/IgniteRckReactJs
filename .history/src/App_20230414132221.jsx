import { Post } from "./Post"
import "./App.css"
import Header from "./components/Header"

function App() {

  return (
    <div>
    
   <Post 
   author="Milena Martini" 
   content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ullam recusandae architecto deleniti enim a accusantium! Vero, odit nostrum debitis aut ipsam quam, non veniam laborum quae aliquam at sequi."
   />
   
   <Post 
      author="Mi"
      content="aaaaaa"
    />
   </div>
  )
}
export default App
