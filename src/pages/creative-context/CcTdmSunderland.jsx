import PageLayout from "../../components/PageLayout"
import Section1 from "../../components/Section1"
import Card from "../../components/Card"
import P1 from "../../components/P1"
import H2 from "../../components/H2"
import ImageWithVideo from "../../components/ImageWithVideo"
import Screenshot from "../../components/Screenshot"

import screenshot0 from "../../assets/showcase-images/TDM-sketch.jpg"
import screenshot1 from "../../assets/showcase-images/TDM-screenshot1.jpg"
import screenshot2 from "../../assets/showcase-images/TDM-screenshot2.jpg"
import screenshot3 from "../../assets/showcase-images/TDM-screenshot3.jpg"


const CcTdmSunderland = () => {
  return (
    <PageLayout title="Creative Context">
        <Section1>
            
            <div className="mb-16">
                <Card>
                    <p className="mb-2 text-2xl">Project: “TDM Ident Animation”</p>
                    <p className="mb-2 text-lg">Client: TDM</p>
                </Card>
            </div>

            <H2>Background</H2>                
            <P1>I was asked to produce a video 'ident' animation to act as a brand identity for a YouTube channel about football.</P1>
            <P1>The brief was to include the TDM channel logo prominently, but also show the club logo.</P1>
            
            <H2>Design Concept</H2>
            <P1>Initial design ideas centered around a football and a goal. As these were developed further, the goal was dropped and replaced by the TDM logo itself: the final design reinforces the TDM brand by subtle animation as the ball is kicked into the logo and it wobbles in reaction - it was a natural followup to use the ball itself to show the club brand, and this was also used as a general texture on the scene stage.</P1>
            <Screenshot
                src={screenshot0}
                alt="Animation design concepts"
                caption="Animation design concepts"
            />
            <H2>Creative Process</H2>
            <P1>In order to provide realistic animation of the ball and its effect of being kicked against the logo, Blender was the perfect tool.</P1>            
            <Screenshot
                src={screenshot1}
                alt="Modelling in Blender"
                caption="Modelling in Blender"
            />
            <P1>The ball was modelled from a primitive icosphere with using sub-surface divisions. This provided a natural edge map for the pentagon and hexagon patterns, and also made it easier when it came to UV unwrapping.</P1>
            <Screenshot
                src={screenshot3}
                alt="UV unwrapping the ball"
                caption="UV unwrapping the ball"
            />
            <P1>The animation was created using physics based modelling with rigid bodies applied to both the ball and the TDM logo. An outline animation test was produced to verify the sequence before investing effort into the texturing and lighting.</P1>
            <ImageWithVideo showVideo={true} playVideo={false} vimeo="882978391" title="Animation test" big />
            <P1>Once the physics was done, a stage setup using 3 point lighting was created, materials were created using shader graph.</P1>
            <Screenshot
                src={screenshot2}
                alt="Material creation using shader graph"
                caption="Material creation using shader graph"
            />
            <P1>The final video was rendered using the cycles engine at 30fps, and post production was done in Final Cut Pro, where an adrenaline-pumping soundtrack was added to complete the ident.</P1>
            <ImageWithVideo showVideo={true} playVideo={false} vimeo="882945005" title="Finished ident animation" big />
            
            <H2>Outcome</H2>
            <P1>The client was very happy with the final result, and the ident will be used on the channel in the near future - with an anticipation that it will help generate more channel followers due to the stronger brand identity.</P1>
        </Section1>
    </PageLayout>
  );
}

export default CcTdmSunderland;