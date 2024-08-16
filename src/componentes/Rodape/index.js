import './Rodape.css'
import "globalStyle/styles.css"
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'
import Redes from 'componentes/Redes'

const Rodape = () => {
  return (
    <footer className='rodape'>
        <Redes />
        <MarcaRegistrada />
        Desenvolvido por Marcelo Ferreira.
    </footer>
  )
}

export default Rodape