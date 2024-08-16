import './BotaoPrincipal.css'

const BotaoPrincipal = ( {valor, tamanho} ) => {
  return (
    <button className={`botaoPrincipal ${tamanho}`}>{valor}</button>
)
}

export default BotaoPrincipal