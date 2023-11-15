import { useGLTF } from '@react-three/drei'

const Pencil = ({children, color}) => {
  const { nodes, materials } = useGLTF('../../experience/pencil-transformed.glb')
  color = color || '#336699'

  return (
    <group dispose={null} scale={2} position={[0.1,0,0]} rotation={[0,Math.PI*0.5,0]}>
      <mesh geometry={nodes.Colour.geometry} castShadow>
        <meshStandardMaterial color={color} />        
      </mesh>
      <mesh geometry={nodes.Wood.geometry} material={materials['Wood bit']} castShadow />
    </group>
  )
}

export default Pencil

useGLTF.preload('../../experience/pencil-transformed.glb')