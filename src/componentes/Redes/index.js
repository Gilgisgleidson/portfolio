import './Redes.css'
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Redes = () => {
  return (
    <div className='redes-sociais'>
        <a href="https://www.linkedin.com/in/marcelo-ferreira-81720323b/" target="_blank" rel="noreferrer">
            <FaLinkedin className="redes"/>
        </a>
        <a href="https://github.com/Gilgisgleidson" target="_blank" rel="noreferrer">
            <FaGithub className="redes"/>
        </a>
    </div>
  )
}

export default Redes