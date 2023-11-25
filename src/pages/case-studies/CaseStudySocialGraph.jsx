import PageLayout from "../../components/PageLayout"
import Section1 from "../../components/Section1"
import Card from "../../components/Card"
import P1 from "../../components/P1"
import H2 from "../../components/H2"
import ImageWithVideo from "../../components/ImageWithVideo"
import Screenshot from "../../components/Screenshot"

import screenshot1 from "../../assets/portfolio-images/ot-social-graph1.jpg"

const CaseStudySocialGraph = () => {
    return(
        <PageLayout title="Case Study #1">
            <Section1>
                
                <div className="mb-16">
                    <Card>
                        <p className="mb-2 text-2xl">Project: 3D Social Graph</p>
                        <p className="mb-2 text-xl">Client: OpenText Corporation</p>
                        <p className="mb-2 text-xl">Role: Senior UI Developer</p>
                    </Card>
                </div>
                
                <Screenshot
                    src={screenshot1}
                    alt="Social Graph UI"
                    caption="Screenshot of the social graph UI in use"
                />

                <H2>Background</H2>


<P1>OpenText is one the largest software companies in Canada, with a revenue of nearly $5 bn, around 20,000 employees and 120,000 customers in 180 countries.</P1>
<P1>Content Server, the company’s flagship enterprise content management (ECM) product provides a role-based web interface that enables organisations to safely manage and control a variety of unstructured documents and data throughout its entire lifecycle from creation to long-term secure archival.<br />
As a senior UI developer within the Research & Development division, I played a key role in shaping product user experience and interface design.</P1>


<H2>Design Problem</H2>

<P1>Large organisations have millions of documents and many thousands of employees and contractors. Content Server is designed to manage all this information throughout the document lifecycle: this results in a large amount of metadata. The system has many ways to produce reports on the underlying data, but visualising the relationships between data, creators and consumers has always been difficult.</P1>

<P1>I lead a team tasked with creating a new web interface: a tool that could enable users to gain business insights about the social connections between creators, the information they created and the people who consume that information. The solution needed to be able to scale effectively for very large deployments, and be usable on a typical office PC without special hardware requirements.</P1>

<H2>Design Solution</H2>

<P1>Using SQL reporting tools, my team produced a number of reports that queried multiple relational database tables to create useful data views. A research phase explored efficient ways to query these views, resulting in a graph-theory based schema that used the UID (unique identifier) of each document to create an array of metadata-rich nodes. An array of edges had further metadata around interactions between users and documents.</P1>

<P1>The initial design used the D3 javascript library to produce a force-directed graph using circles for nodes and connecting lines for edges. Line thickness was a function of the number of connections, and circle size indicated frequency of access. Being dynamic, the chart could also be modified to use different functions to indicate other data dimensions such as number of modifications.</P1>

<P1>User testing found that some charts were hard to comprehend when a large number of connections between multiple nodes existed. This was addressed initially by means of filtering controls that reduced the number of less relevant nodes on the chart, and by subtle use of opacity to visually promote or demote items of interest.</P1>

<H2>Extra Dimensions</H2>

<P1>Some of the usability issues were identified as a limitation caused by displaying the information in a two-dimensional space. To explore this, a new interface was developed using WebGL. This rendered the node graph within a three dimensional space. The interaction design used familiar mouse conventions to allow users to orbit the graph and zoom in on areas of interest. Animation created using particle emitters and custom shaders was able to show the information flow along edges.</P1>

<ImageWithVideo showVideo={true} playVideo={false} vimeo="884031780" title="Screencam of Social Graph POC app" big />

<H2>Outcomes</H2>

<P1>The novel nature of the experience meant that some users found the visualisation a little daunting, but even a limited prior exposure to video games enabled most users to quickly comprehend how to navigate the experience and draw insights from the connections.</P1>
<P1>This project produced a working POC that is not currently part of the standard product offering, but is possible to deploy as part of a services engagement. </P1>
<P1>After the solution was demonstrated to analysts, OpenText moved into the Forrester Wave ‘leaders’ quadrant (2023), which is predicted to have a significant impact on software sales revenue.</P1>
   


            </Section1>
        </PageLayout>
    )
}

export default CaseStudySocialGraph