import P1 from "../components/P1"
import Section1 from "../components/Section1"
import PageLayout from "../components/PageLayout"
import PortfolioItem from "../components/PortfolioItem"

import tdmSunderland from "../assets/showcase-images/tdm-sunderland.jpg"

const showcaseItems = [
    { 
        image: tdmSunderland,
        vimeo: "882945005",
        title: "TDM Sunderland ident animation",
        description: "A short animation created for a YouTube channel about Sunderland AFC.",
        link: "tdm-sunderland"
    }
]

const Showcase = () => {
    return(
        <PageLayout title="Showcase">
            <Section1>
               
                <p className="text-2xl mb-8">Some more visual and/or interactive projects.</p>

                <div className="grid grid-cols-1 xl:grid-cols-2 xxl:grid-cols-3 gap-8 mt-16">

                    {showcaseItems.map((item, index) => {
                        return (
                            <PortfolioItem
                                key={index}
                                image={item.image}
                                vimeo={item.vimeo}
                                title={item.title}
                                description={item.description}
                                link={item.link ?? null}
                                linkName="Creative Context"                                
                            />
                        )
                    })
                    }
                                    
                </div>
            </Section1>
        </PageLayout>
    )
}

export default Showcase