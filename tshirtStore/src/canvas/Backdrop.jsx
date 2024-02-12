import { easing } from "maath";
import { useFrame, extend, useThree } from "@react-three/fiber";
import {
  AccumulativeShadows,
  RandomizedLight,
} from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useSnapshot } from "valtio";
import state from "../store";
const BackDrop = () => {
  const shadows = useRef();
  const snap=useSnapshot(state);
  const greenColor = new THREE.Color(snap.color); // Green color

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.3}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[1, -1.5, -0.14]}
      color={greenColor}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 10, -10]}
        color={greenColor} // Set the color to green
      ></RandomizedLight>
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-10, -10, 9]}
        color={greenColor} // Set the color to green
      ></RandomizedLight>
    </AccumulativeShadows>
  );
};

export default BackDrop;
