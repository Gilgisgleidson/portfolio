import './Banner.css';
import circuloColorido from 'assets/gradient_img (1).png';
import minhaFoto from 'assets/photo_2024-03-29_17-01-25.jpg'
import "globalStyle/styles.css"

const Banner = () => {
    return (
        <div className='banner no-select'>
            <div className='apresentacao no-select'>
                <h1 className='titulo no-select'>
                    Olá, Mundo!
                </h1>

                <p className='paragrafo no-select'>
                    Boas vindas ao meu espaço pessoal!
                    <br/>Meu nome é Marcelo Ferreira, e sou um Desenvolvedor Front-end.
                </p>

                <p className='paragrafo no-select'>
                    Abaixo estão os meus projetos pessoais e trabalhos que participei.
                    <br/>Clique na imagem ou título para ver uma explicação!
                    <br/>Clique em visitar para ir direto ao site!
                </p>
            </div>

            <div className='imagens no-select'>
                <img
                    className='circuloColorido'
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=''
                />

                <img
                    className='minhaFoto'
                    src={minhaFoto}
                    alt="Foto sorrindo"
                />
            </div>
        </div>
    )
}

export default Banner