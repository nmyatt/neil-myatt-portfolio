import { useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, useFont } from "@react-three/drei"

const skills = 
[
    "React",
    "Native Javascript",
    "ES6",
    "JQuery",    
    "React Three Fiber",
    "THREE.js",
    "WebGL",
    "GLSL",
    "Shaders",
    "Blender",
    "3D workflow",    
    "HTML 5",
    "Semantic HTML",
    "CSS",
    "Tailwind",
    "Node",
    "SQL",
    "Responsive Design",
    "Web Accessibility",
    "UX Methodologies",
    "Heuristics",    
    "AI workflow",
    "AR (Augmented Reality)",
    "D3",
    "REST APIs",
    "Agile methodology",
    "Photoshop",
    "Visual Design",
    "Figma",
    "Prototyping",
    "Unity"
]

const quotes = [
    "I poke code and push pixels",
    "I explore new ways to push pixels around",
    "I bring colour to code",
    "I put user experience first",
    "I make beautiful user interfaces",
    "I blend art with science"
]


const HeroText = ({position=[0,0,0]}) => {

    const [quoteText, setQuoteText] = useState(quotes[0])
    const quoteRef = useRef(quotes[0])
    const [quoteIndex, setQuoteIndex] = useState(0)

    const [cyclingColor, setCyclingColor] = useState('#000000')

    useFrame((state,delta) => {
        setCyclingColor(`hsl(${(Math.floor(Math.sin(state.clock.elapsedTime * 0.2) * 180))}, 60%, 50%)`)
    })

    return (
        <group position={position}>
            <Text
                fontSize={0.09}
                letterSpacing={-0.04}
                font="./experience/LibreBaskerville-Bold.woff"
                color='#71717a'                
                material-transparent={false}        
            >Neil Myatt   
                <Text
                    position={[0.28,-0.023,0]}
                    fontSize={0.04}
                    font="./experience/lato-regular.woff"
                    color='#71717a'
                    material-transparent={false}
                >, MA
                </Text>             
            </Text>
            
            <Text
                position={[0,-0.15,0]}
                letterSpacing={-0.05}
                fontSize={0.12}
                font="./experience/lato-regular.woff"
                color={cyclingColor}
                material-transparent={false}
            >Creative Developer</Text>
            
        </group>
    )
}

useFont.preload('./experience/LibreBaskerville-Bold.woff')
useFont.preload('./experience/lato-regular.woff')

export default HeroText;