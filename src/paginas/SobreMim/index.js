import "globalStyle/styles.css"
import './SobreMim.css'
import PostModelo from "componentes/PostModelo"
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/photo_2024-03-29_17-18-33.jpg"

const SobreMim = () => {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      title="Sobre Mim"
    >
      <h3 className="subtitulo">
        Olá, eu sou o Marcelo
      </h3>

      <img 
        src={fotoSobreMim}
        alt="foto"
        className="fotoSobreMim"
      />

      <p className='paragrafo'>
        Eu sou um desenvolvedor de Front-end.
      </p>
      <p className='paragrafo'>
        Eu curso Análise e Desenvolvimento de Sistemas na Cruzeiro do Sul, e faço cursos de programação e outras áreas da Tecnologia da Informação através da plataforma <a href="https://alura.com.br" target="_blank" rel="noreferrer" style={{color:"#4169e1"}}>Alura</a>.
      </p>
      <p className='paragrafo'>
        Fui estagiário no TCDF - Tribunal de Contas do Distrito Federal por 2 anos, e também no TST - Tribunal Superior do Trabalho por 2 anos.
      </p>
      <p className='paragrafo'>
        Atualmente trabalho programando nas linguagens JavaScript, React.js, HTML, CSS, TypeScript, Python e SQL. Gostaria de uma oportunidade do primeiro emprego para que possa adquirir mais experiência e evoluir na área.
      </p>
      <p className='paragrafo'>
        Neste portfólio eu tenho alguns projetos individuais, além de projetos que participei também.
      </p>
      <p className='paragrafo'>
        Espero que através desse portfólio possam ver a minha capacidade e desejo de evoluir mais. Sejam bem-vindos, e muito obrigado pelo interesse!
      </p>
    </PostModelo>
  )
}

export default SobreMim