import P1 from "../components/P1"
import Section1 from "../components/Section1"
import PageLayout from "../components/PageLayout"

import avatarMe from "../assets/avatar-me-3d.png"

const AboutMe = () => {
    return(
        <PageLayout title="About Me">
            <Section1>

                <p className="text-2xl mb-8">I've worked in a hybrid technical/creative role for over 15 years.</p>

                <div className="flex flex-col justify-center items-center"><img className="w-2/3 sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 mb-8" src={avatarMe} alt="a not-very-accurate avatar image of Neil Myatt" /></div>

                <P1>Developers, product owners, business stakeholders and creatives often talk different languages and sometimes struggle to communicate their domain-specific knowledge. I understand them, and try to help avoid ambiguity and misunderstanding across the team.</P1>                            

                <P1>I'm equally able to talk gestalt principles with a visual designer or mesh topology with a 3D designer. I am happy debugging a race-condition with a javascript dev or discussing data architecture with a back-end engineer. I'm an excellent communicator and have frequently presented to C-level execs.</P1>

                <P1 addClasses="border-l-4 border-blue-700 rounded px-12 py-6 bg-white">I have plenty of experience working with multi-disciplinary teams, using best practices like UX design methodologies and iterative development processes. More recently, I've explored introducing AI into the dev workflow.</P1>

                <P1>I'm a dedicated learner, and keep abreast of technology advances. My philosophy is to build as diverse a knowledge base as possible - you never know what piece of obscure knowledge may be useful in a creative project...</P1>
                
                <P1 addClasses="border-l-4 border-pink-400 rounded px-12 py-6 bg-white">Fundamentally, I like being at the coal-face. I like starting with a blank sheet of paper and a diverse team of people, and just start iterating. I'm not a fan of complex corporate hierarchies and departmental silos - I think communication flows better horizontally and without bottlenecks.</P1>

                <P1>In my spare time I play bass guitar and synth. I'm also serious about photography (<a href="https://www.instagram.com/themyatt_photobestiary/" className="text-blue-500 underline hover:text-blue-800">for example...</a>). I've learned a lot about sound design over the years and i'm always looking for the opportunity to bring that into a creative project!</P1>
                

            </Section1>

            <Section1>
                <h1 className="my-16 text-6xl leading-none tracking-tight text-zinc-400">Skills Summary</h1>
                <P1>Working in a Research & Development role and the experience of studying for a Masters degree have enabled me to explore a lot of technologies. Here's a summary of some of the skills I think are most useful to my work:</P1>
                
                <div className="flex flex-wrap gap-4">
                    <div className="grow border p-1 pb-4">
                    <h2 className="text-2xl p-4 mb-2 text-white" style={{backgroundColor: '#dd8833'}}>Coding</h2>
                        <ul className="p-4">
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>Vue</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>THREE js (WebGL)</li>
                            <li>React Three Fiber</li>
                            <li>GLSL</li>
                            <li>D3</li>
                            <li>Mongo / Mongoose</li>
                            <li>SQL</li>
                            <li>C# and Unity</li>                    
                        </ul>
                    </div>
                    
                    <div className="grow border p-1 pb-4">
                        <h2 className="text-2xl p-4 mb-2 text-white" style={{backgroundColor: '#992277'}}>Creative</h2>
                        <ul className="p-4">
                            <li>Blender</li>
                            <li>Unity</li>
                            <li>Figma</li>
                            <li>Axure</li>
                            <li>Protopie</li>
                            <li>Adobe XD</li>
                            <li>Adobe Photoshop</li>
                            <li>Final Cut</li>
                            <li>Adobe Illustrator</li>
                        </ul>
                    </div>

                    <div className="grow border p-1 pb-4">
                    <h2 className="text-2xl p-4 mb-2 text-white" style={{backgroundColor: '#330099'}}>General</h2>
                        <ul className="p-4">
                            <li>UX Design process</li>
                            <li>UX Research</li>
                            <li>Information Architecture</li>
                            <li>Agile Development Methodology</li>
                            <li>Visual Design</li>
                            <li>Interaction Design</li>
                            <li>Design for Accessibility</li>
                            <li>Responsive web design (like this site)</li>
                            <li>3D Workflow</li>
                            <li>Technical Writing</li>
                            <li>UX Writing</li>                            
                        </ul>
                    </div>
                </div>                
            </Section1>
            
            <Section1>
                <h1 className="my-16 text-6xl leading-none tracking-tight text-zinc-400">One other thing...</h1>
                <P1>Every photo, illustration, 3D graphic and animation on this site is an original work created by me. I mean, I'm not averse to using stock assets, I just didn't for this site.</P1>    
            </Section1>
        </PageLayout>
    )
}

export default AboutMe