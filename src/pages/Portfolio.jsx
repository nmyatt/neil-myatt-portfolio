import P1 from "../components/P1"
import PortfolioItem from "../components/PortfolioItem"
import Section1 from "../components/Section1"
import PageLayout from "../components/PageLayout"
/* thumbnails */
import luxed from "../assets/portfolio-images/luxed-thumbnail1.jpg"
import pathfindersAr from "../assets/portfolio-images/pathfinders-ar-thumbnail.jpg"
import xpression from "../assets/portfolio-images/xpression-thumbnail1.jpg"
import otPerspectiveManager2 from "../assets/portfolio-images/ot-perspective-manager2.jpg"
import otSocialGraph1 from "../assets/portfolio-images/ot-social-graph1.jpg"
import otBarclays1 from "../assets/portfolio-images/ot-barclays1.jpg"
import wecommThumbnail from "../assets/portfolio-images/wecomm-thumbnail.jpg"


const portfoliioItems = [
    {
        image: luxed,
        vimeo: "873039287",
        title: "LUXED Virtual Photography Studio",
        description: "Functional prototype for an app that is currently under development. Created using Figma and Unity. LUXED provides a virtual photography studio with realistic lighting and camera behaviours. The prototype was extensively tested with users during development.",
        type: "iPad app",
        role: "Developer, UX Design, UI Design, Prototyping",
    },
    {
        image: pathfindersAr,
        title: "Pathfinders AR",
        vimeo: "759818565",
        description: "Functional prototype for an augmented reality mobile app that enables an enriched exhibition experience through examination of virtual artefacts in their museum context. The app features gamification and was targetted at older children and young adults.",
        type: "Mobile app",
        role: "Technical Lead, UX Design, UI Design, Prototyping",
    },
    {
        image: xpression,
        title: "XPression Music Controller",
        vimeo: "883734356",
        description: "Functional prototype for a mobile app controller that uses Bluetooth MIDI to control music hardware. The prototype was developed using a combination of web technologies and Unity in order to create a high fidelity testing experience.",
        type: "Mobile app",
        role: "Developer, UX Design, UI Design, Prototyping",
    },    
    {
        image: otPerspectiveManager2,
        title: "SmartUI Perspectives",
        description: "Developed as part of OpenText Extended ECM, SmartUI Perspectives is a web-based tool that enables businesses to create role-based views onto their content. The tool was developed using a MVC approach, and was extensively tested in usability labs. ", 
        type: "Intranet Web App",
        role: "Lead UI Developer, UX Design, UI Design, Prototyping",
        link: "case-study-1"
    },
    {
        image: otSocialGraph1,
        title: "Social Graph POC",
        description: "Developed as part of OpenText Extended ECM, I developed a number of configurable graphical reports that enabled users to visualise their data. The innovative 3D social graph interface was instrumental in helping the company move into the Forrester Wave leaders segment for reporting.",
        type: "Data Visualisation UI",
        vimeo: "884031780",
        role: "Lead UI Developer, UX Design, UI Design, Prototyping",
        link: "case-study-2"

    },
    {
        image: otBarclays1,
        title: "Intranet Projects",
        description: "Within OpenText, I have worked on a variety of intranet projects for companies ranging from SMEs to large organisations such as RBS, Santander, Rolls Royce, Honda, Transport For London, Kingfisher, Shell, The British Council.",
        type: "Intranet UI Design and Development",
        role: "Technical Consulting, UI Design, Prototyping, Information Architecture"
    },
    {
        image: wecommThumbnail,
        title: "Mobile Apps",
        description: "In my time with Wecomm, I helped design and develop a number of cross-platform mobile apps and prototypes for clients such as Daimler, Lawn Tennis Association and the Official AFL (ozzy rules football) app.",
        type: "Mobile App UI Design and Development",
        role: "Technical Consulting, UI Design, Prototyping"
    }
]

const Portfolio = () => {
    return(
        <PageLayout title="Project Portfolio">
            <Section1>                
                <p className="text-2xl mb-8">Some of the projects I've worked on, usually in a principal or lead role.</p>
                
                <div className="grid grid-cols-1 xl:grid-cols-2 xxl:grid-cols-3 gap-8 mt-16">

                    {portfoliioItems.map((item, index) => {
                        return (
                            <PortfolioItem
                                key={index}
                                image={item.image}
                                vimeo={item.vimeo}
                                title={item.title}
                                description={item.description}
                                type={item.type}
                                role={item.role}
                                link={item.link ?? null}
                            />
                        )
                    })
                    }
                                    
                </div>
                
            </Section1>
        </PageLayout>
        
    )
}

export default Portfolio