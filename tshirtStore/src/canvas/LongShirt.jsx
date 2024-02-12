/* eslint-disable react/no-unknown-property */
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "../store";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture , Decal} from "@react-three/drei";

const LongShirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/dickies_long_sleeve_shirt.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  useFrame((state, delta) =>
    easing.dampC(materials.Shirt.color, snap.color, 0.25, delta)
  );
  const stateString = JSON.stringify(snap);
  return (
    <group  key={stateString}>
      <mesh
        castShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.Shirt}
        material-roughness={1}
        dispose={null}
        scale={[0.5, 0.5, 0.5]}
      >
         {snap.isFullTexture && (
          <Decal
          position={
            snap.pos.x === null && snap.pos.y === null
              ? [0, 0, 0]
              : [snap.pos.x, snap.pos.y, 0.15]
          }
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (
          <Decal
          
            // position={[-0.1, -0.2, 0.15]}
            position={
              snap.pos.x === null && snap.pos.y === null
                ? [-0.1, -0.2, 0.15]
                : [snap.pos.x, snap.pos.y, 0.15]
            }
            rotation={[0, 0, 0]}
            scale={snap.logoTextureSize==0.15? 0.5:snap.logoTextureSize}
            map={logoTexture}
            anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
        
      </mesh>
    </group>
  );
};

export default LongShirt;
