import { Header } from './Components/Header.tsx';
import {Post,PostType} from './Components/Post.tsx';
import styles from './App.module.css'
import './global.css' //ja aplica a estilização
import { Sidebar } from './Components/Sidebar.tsx';


//author: {avatar_url:"", name:"" , role: ""}
//publishedAt : Date
//content : String


const posts: PostType[] = [
   {
      id:1,
      author:{
         avatarUrl:"https://github.com/marquezzin.png",
         name:"Gabriel Marques" ,
         role: "Developer"
      },
      content: [
         {type: 'paragraph', content :"Fala galera, acabei de terminar meu primeiro projeto em React!"},
         {type: 'link', content:"caetano.design/doctorcare"}
      ],
      publishedAt: new Date("2024-08-07 20:00:00")
   },
   {
      id:2,
      author:{
         avatarUrl:"https://github.com/caefleury.png",
         name:"Caetano Korilo" ,
         role: " Java Developer"
      },
      content: [
         {type: 'paragraph', content :"Fala galera, acabei de terminar meu primeiro projeto em React!"},
         {type: 'link', content:"caetano.design/doctorcare"}
      ],
      publishedAt: new Date("2024-08-06 20:00:00")
   }
]

 export function App() {

  return (
   <div>
      <Header />

      <div className={styles.wrapper}>
         <Sidebar />
         <main>
            {posts.map(post => {
                return(
                <Post
                  key = {post.id} //evitar o erro no console, tem que ser única
                  post = {post}
                />

               )
            })}
         </main>
      </div>
   </div>
  )
}

export default App
