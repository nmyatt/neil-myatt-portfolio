import PageLayout from "../../components/PageLayout"
import Section1 from "../../components/Section1"
import Card from "../../components/Card"
import P1 from "../../components/P1"
import H2 from "../../components/H2"
import Screenshot from "../../components/Screenshot"

import screenshot1 from "../../assets/portfolio-images/ot-perspective-manager1.jpg"
import screenshot2 from "../../assets/portfolio-images/ot-perspective-manager2.jpg"

const CaseStudyPerspectives = () => {
    return(
        <PageLayout title="Case Study">
            <Section1>
                
                <div className="mb-16">
                    <Card>
                        <p className="mb-2 text-2xl">Project: “Perspectives”</p>
                        <p className="mb-2 text-lg">Client: OpenText Corporation</p>
                        <p className="mb-2 text-lg">Role: Senior UI Developer</p>
                    </Card>
                </div>
                
                <Screenshot
                    src={screenshot2}
                    alt="Content Server UI"
                    caption="A role-based perspective in Content Server"
                />

                <H2>Background</H2>

    <P1>OpenText is one the largest software companies in Canada, with a revenue of nearly $5 bn, around 20,000 employees and 120,000 customers in 180 countries.
    Content Server, the company’s flagship enterprise content management (ECM) product provides a role-based web interface that enables organisations to safely manage and control a variety of unstructured documents and data throughout its entire lifecycle from creation to long-term secure archival.<br />
    As a senior UI developer within the Research & Development division, I played a key role in shaping product user experience and interface design.</P1>


    <H2>Design Problem</H2>

    <P1>Much of the success of the product has been the ability to customise and tailor the interface to an 
    organisation’s specific requirements. The original product (called Livelink) was developed using a client-server architecture. This approach allowed extensive UI customisation by editing the wrapper HTML around the dynamic content, often at a very granular level.</P1>

    <P1>Following UI design trends, a new interface was developed called “Smart” which used a single-page-application (SPA) pattern. The Smart UI was based on Backbone JS, Node and REST APIs.
    While this component library approach had many advantages in terms of UI performance and consistency, this was often at the cost of customisation ability. Customers who wanted to do so faced a steep learning curve - using the SDK to modify or create custom components.</P1>

    <Screenshot
        src={screenshot1}
        alt="Perspective Manager"
        caption="The Perspective Manager tool"
    />

    <H2>Design Solution</H2>

    <P1>I was part of a team that developed widget components that could be aggregated into views called “perspectives”, but outside of using the SDK, there was no easy way to extensively customise them. The team worked on a method that enabled perspectives to be defined as a JSON configuration with options, but this was not end-user facing. My goal was to design an interface that let non-technical users create perspectives for any purpose. The tool had to output a valid JSON configuration that described the interface.</P1>

    <P1>We broke down the process into some key stages: general settings like name, the location it would override. Rules (when it would take effect). Layout (UI) and widgets (adding and configuring widgets). I researched design patterns and found the most intuitive approach would be a wysiwyg editor that had drag and drop. The main page had a library pane, and an inspector pane.</P1>

    <H2>My Role</H2>
    
    <P1>My role as Lead UI Developer involved design meetings with stakeholders and organising usability testing of early concepts. I was leading a project team of developers, writers and testers and communicating the design details with technical architects and product owners. Frequent liason with different stakeholders was required, including sprint demos and more formal presentations to senior execs at key stages of the project.</P1>

    <H2>Outcomes</H2>

    <P1>The tool was highly successful and has been a key part of selling the SmartUI in new engagements. Presales consultants can develop highly tailored business solutions quickly, and even execs can demo the customisation tools – this was done as part of a keynote demo at the annual enterprise world in Toronto in front of over 1000 people.
    Throughout the project, we engaged in usability testing and validated the design approach, and feedback from customers has been extremely positive.</P1>
    <P1>Industry analysts such as Gartner and Forrester place the product highly against competitors such as IBM and Microsoft, and Perspectives play a significant factor in their assessment.</P1>


            </Section1>
        </PageLayout>
    )
}

export default CaseStudyPerspectives