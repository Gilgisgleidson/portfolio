import './PostModelo.css'

const PostModelo = ( {children, fotoCapa, title} ) => {
  return (
    <article className='postModeloContainer'>
        <div
            className='fotoCapa'
            style={{backgroundImage: `url(${fotoCapa})`}}
        ></div>

        <h2 className='title'>
            {title}
        </h2>

        <div className='postConteudoContainer'>
            {children}
        </div>
    </article>
  )
}

export default PostModelo