import { Link } from 'react-router-dom'

const NavBarLink = ({ children, to, hoverColor }) => {

    return (
        <li className={`text-black bg-zinc-200 transition-all duration-200 ease-in-out hover:bg-zinc-300 hover:text-white`}>
            <Link to={to}>
                <div className="py-2 px-3">{children}</div>
            </Link>
        </li>
    )
}

export default NavBarLink