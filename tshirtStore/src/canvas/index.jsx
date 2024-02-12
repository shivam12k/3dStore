import { Canvas } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import { Center, Environment } from "@react-three/drei";
import CameraRig from "./CameraRig";
import Backdrop from "./Backdrop";
import Tshirt from "./Tshirt";
import Hoodie from "./Hoodie";
import LongShirt from "./LongShirt";
import { OrbitControls } from "@react-three/drei";
import { slideAnimation } from "../config/motion";
import { ChangeDress } from "../config/constants";
import { Tab } from "../conponents";
import { useState } from "react";
const CanvasModel = () => {
 
  const [dressType, setDressType]=useState("");
  const genrateDress=()=>{
    switch(dressType){
      case "shirt":
        return <Tshirt/>
      case "sleeves":
        return <LongShirt/>
      case "hoodie":
        return <Hoodie/>
      default:
        return null;
    }
  }
  return (
 
     <AnimatePresence>
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="absolute inset-0 w-full h-full max-w-full max-h-full  transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <CameraRig>
          <Backdrop />
          <Center />
          {genrateDress()==null ? <Tshirt/>: genrateDress()}
         
          {/* <OrbitControls /> */}
        </CameraRig>
      </Canvas>
     
        
          <motion.div className="changes-container" {...slideAnimation("right")}>
            {ChangeDress.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab
                handleClick={() => {setDressType(tab.name)}}
              />
            ))}
          </motion.div>
      
      </AnimatePresence>
  
  );
};

export default CanvasModel;
