
import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostProps } from './components/Post';



// author : {avatarURL:"", name:"", role=""}
// PublishedAt: Date
// content: ""

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/victorfrei.png",
      name: "Victor Freire",
      role: "Web Developer"
    },
    publishedAt: new Date('2023-05-24 10:28:00'),
    content: [
      { type: "paragraph", content: 'Fala galeraa 👋' },
      { type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: "link", content: 'jane.design/doctorcare' }
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/afonsofarias.png",
      name: "Afonso Farias",
      role: "Suporte Geral"
    },
    publishedAt: new Date('2023-05-23 17:00:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ]
  }
];



function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => <Post key={post.id} {...post} />)}
        </main>
      </div>


    </>
  )
}

export default App
