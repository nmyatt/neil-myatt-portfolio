import FooterLink from "./FooterLink"

const FooterNav = () => {
    return ( 
        <nav className="lg:space-x-12 flex flex-col sm:flex-row flex-wrap my-8 items-top">
            <FooterLink to="/" label="Home" primary />
            <FooterLink to="/about-me" label="About Me" primary />
            <FooterLink to="/portfolio" label="Portfolio" primary >
                <FooterLink to="/portfolio/case-study-1" label="Case Study #1" />
                <FooterLink to="/portfolio/case-study-2" label="Case Study #2" />
            </FooterLink>
            <FooterLink to="/showcase" label="Fun Stuff" primary >
                <FooterLink to="/showcase/tdm-sunderland" label="Creative context #1" />
            </FooterLink>
        </nav>
    )
}

export default FooterNav;