import { Header } from "./components/Header"
import { Post, PostsProps } from "./components/Post"
import { Sidebar } from "./components/Sidebar"


import styles from "./App.module.css"
import "./global.css"

interface Posts extends PostsProps {
  id: number
}


const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/alquipo.png",
      name: "Alquipo Neto",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: " jane.design/doctorcare" },


    ],
    publishedAt: new Date("2022-09-12 12:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/alquipo.png",
      name: "Alquipo Neto 2",
      role: "Web Developer 2"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: " jane.design/doctorcare" },


    ],
    publishedAt: new Date("2022-09-10 12:00:00")
  },
]

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />
        <main>
          {posts.map(post => (

            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
          )}
        </main>
      </div>

    </>

  )
}

export default App
