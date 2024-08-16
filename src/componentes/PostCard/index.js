import { Link } from 'react-router-dom'
import './PostCard.css'
import BotaoPrincipal from 'componentes/BotaoPrincipal'

const PostCard = ( {postCard} ) => {
  return (
    <div className='postCard'>
      <Link to={`/posts/${postCard.id}`}>
            <img 
                className='capa'
                src={`/assets/posts/${postCard.id}/capa.png`}
                alt='post'
                />
            <h2 className='titulos'>{postCard.titulo}</h2>
      </Link>
      <a href={postCard.url} target="_blank" rel="noreferrer">
        <BotaoPrincipal valor={'Visitar'} onClick=""/>
      </a>
    </div>
  )
}

export default PostCard