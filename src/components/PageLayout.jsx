import Footer from "./Footer"
import ScrollToTop from "../helpers/ScrollToTop"

const PageLayout = ({ title, children }) => {
    return(
        <>  
            <ScrollToTop />
            <div className="fixed w-full mt-8 h-24 bg-gradient-to-b from-white to-transparent z-40"></div>
            <div className="pt-16 w-5/6 sm:w-4/6 md:w-3/6 lg:w-3/6 xl:w-3/6 justify-center mx-auto">
                <h1 className="my-16 text-6xl font-black leading-none tracking-tight text-zinc-400">{title}</h1>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default PageLayout