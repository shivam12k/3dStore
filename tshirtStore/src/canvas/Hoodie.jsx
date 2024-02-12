/* eslint-disable react/no-unknown-property */
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "../store";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture, Decal } from "@react-three/drei";

const Hoodie = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/hoodiess.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => {
    easing.dampC(materials.lamb1.color, snap.color, 0.25, delta);
  });

  const stateString = JSON.stringify(snap);
  console.log("Logo Texture:", logoTexture);
  console.log("Full Texture:", fullTexture);

  return (
    <group key={stateString} position={[0, -0.3, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.test_lambert1_0.geometry}
        material={materials.lamb1}
       
        scale={0.01}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (
          <Decal
            position={[0.9, 0.05, 0.15]}
            rotation={[0, 0, 0]}
            scale={snap.logoTextureSize}
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

export default Hoodie;
