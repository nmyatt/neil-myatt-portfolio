import NavBarLink from "./NavBarLink"

const NavBar = ({children, to, color}) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-20 navbar navbar-expand-lg navbar-light bg-zinc-200 shadow-md shadow-zinc-400 z-50">
            <div className="nm-fixjump">
                <ul className="flex flex-row justify-center">
                    {children}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar