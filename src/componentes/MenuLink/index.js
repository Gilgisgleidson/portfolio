import './MenuLink.css'
import { NavLink } from 'react-router-dom'

const MenuLink = ({children, to}) => {
    return (
        <NavLink
            className={({ isActive }) => `link ${isActive ? 'linkDestacado' : ""}
            `}
            to={to}
            end
        >
            {children}
        </NavLink>
    )
}

export default MenuLink
