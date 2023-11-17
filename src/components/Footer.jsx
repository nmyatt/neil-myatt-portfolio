import NavUpDown from './NavUpDown'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'

const Footer = () => {
    return (
        <>
            <NavUpDown target="top" label="Page top" />            
            <footer className="w-full flex flex-col bg-gray-800 text-gray-500 px-8 py-4 justify-center items-center">
                <p className="text-center text-xs">FYI: this site was hand-coded using mainly React, THREE, GLSL and Tailwind.</p>
                <div className="my-8 flex flex-col space-y-4">
                    <a href="https://www.linkedin.com/in/neilmyatt-ux-unicorn/" target="_blank" className="flex flex-row">                        
                        <img src={linkedin} className="mr-4" style={{width: '2.5em', height: '2.5em'}} /> 
                        <div className="leading-10 text-lg">neilmyatt-ux-unicorn</div>
                    </a>
                    <a href="https://www.instagram.com/themyatt_photobestiary/" target="_blank" className="flex flex-row">
                        <img src={instagram} className="mr-4" style={{width: '2.5em', height: '2.5em'}} /> 
                        <div className="leading-10 text-lg">themyatt_photobestiary</div>
                    </a>                    
                </div>
                <p className="text-center text-lg">© Neil Myatt, 2023</p>
            </footer>
        </>
    )
}

export default Footer