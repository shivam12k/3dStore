import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { snapshot, useSnapshot } from "valtio";
import state from "../store";
import Tab from "./Tab"; // Assuming you have a Tab component that needs to be imported.

const ChangeDress = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <motion.div className="changes-container" {...slideAnimation("up")}>
          {ChangeDress.map((tab) => (
            <Tab
              key={tab.name}
              tab={tab}
              isFilterTab
              isActiveTab
              handleClick={() => {}}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChangeDress;
