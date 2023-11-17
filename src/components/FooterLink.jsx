import { Link } from 'react-router-dom'

const FooterLink = ({children, to, label, primary}) => {
    return (
        <div className={`grow py-2 ${primary && "px-4"}`}>
            <Link className={`text-${primary ? "lg" : "md"} whitespace-nowrap underline hover:text-white text-left`} to={to}>{label}</Link>
            {children}
        </div>
    )
}

export default FooterLink