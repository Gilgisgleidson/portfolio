import './Menu.css';
import MenuLink from '../MenuLink';
import "globalStyle/styles.css"
import Redes from 'componentes/Redes';

const Menu = () => {
    return (
        <header>
            <nav className='navegacao no-select'>
                <Redes />
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu