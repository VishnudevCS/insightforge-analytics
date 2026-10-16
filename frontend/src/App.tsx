import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes } from "react-router";

import SplashScreen from "./components/splash/SplashScreen";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const completeSplash = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <SplashScreen
          key="splash-screen"
          onComplete={completeSplash}
        />
      ) : (
        <motion.div
          key="application"
          initial={{
            opacity: 0,
            scale: 0.985,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="min-h-screen"
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/register"
              element={<RegisterPage />}
            />
          </Routes>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;