import './Inicio.css'
import posts from 'json/posts.json'
import PostCard from "componentes/PostCard"
import "globalStyle/styles.css"

const Inicio = () => {
  return (
      <ul className="posts no-select">
        {posts.map((postCard) => (
          <li key={postCard.id}>
            <PostCard postCard={postCard}/>
          </li>
        ))}
      </ul>
  )
}

export default Inicio