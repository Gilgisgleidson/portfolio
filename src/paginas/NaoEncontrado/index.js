import BotaoPrincipal from 'componentes/BotaoPrincipal'
import './NaoEncontrado.css'
import erro404 from "assets/erro_404.png"
import { useNavigate } from 'react-router-dom'

const NaoEncontrado = () => {

  const navegar = useNavigate()

  return (
    <>
      <div className='conteudoContainer404'>
        <span className='texto404'>404</span>

        <h1 className='titulo404'>
          Ops! Página não encontrada.
        </h1>

        <p className='paragrafo404'>
          Tem certeza de que era isso que estava procurando?
        </p>

        <p className='paragrafo404'>
          Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
        </p>

        <div
          className='botaoContainer'
          onClick={() => navegar(-1)}
        >
          <BotaoPrincipal valor={'Voltar'} tamanho={'lg'} />
        </div>

        <img
          className='imagemCachorro'
          src={erro404}
          alt='erro 404'
          />
      </div>
      <div className='espacoEmBranco'>

      </div>
    </>
  )
}

export default NaoEncontrado