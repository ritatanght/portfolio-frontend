import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedOutlet from "./AnimatedOutlet";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <div className="container">
        <Sidebar />
        <main>
          <AnimatePresence mode="popLayout">
            <motion.div
              className="motion-div"
              key={location.key}
              initial={{ x: 250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 250, opacity: 0 }}
              transition={{ type: "spring", duration: 1 }}
            >
              <AnimatedOutlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
