import { useEffect, useRef } from "react";
import CLOUDSModule from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

import { Routes, Route } from "react-router-dom";

import BranchSelection from "./pages/BranchSelection";
import SemesterSelection from "./pages/SemesterSelection";
import SemesterPage from "./pages/SemesterPage";
import M1 from "./pages/subjects/M1";
import EDC from "./pages/subjects/EDC";
import Chemistry from "./pages/subjects/Chemistry";
import PPS from "./pages/subjects/PPS";
import AEP from "./pages/subjects/AEP";
import BEE from "./pages/subjects/BEE";
import EDCAD from "./pages/subjects/EDCAD";
import DS from "./pages/subjects/DS";
import M2 from "./pages/subjects/M2";
const CLOUDS = CLOUDSModule.default ?? CLOUDSModule;

function Home() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    vantaEffect.current = CLOUDS({
      el: vantaRef.current,
      THREE: THREE,

      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      minHeight: 200.0,
      minWidth: 200.0,

      backgroundColor: 0x000000,
      skyColor: 0x5ca6ca,
      cloudColor: 0x334d80,
      lightColor: 0xffffff,

      speed: 1,
    });

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  // Change the website name here
  const websiteName = "Baby Bullet";

  // Change this URL to your actual Notes website
  const NOTES_URL = "https://example.com";

  return (
    <div
      ref={vantaRef}
      className="relative min-h-screen overflow-hidden bg-[#fefbeb]"
    >
      {/* Navigation Bar */}
      <header className="absolute top-0 left-0 z-20 w-full">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">

          {/* Website Logo / Name */}
          <a
            href="/"
            className="text-xl font-bold tracking-tight text-white sm:text-2xl"
          >
            {websiteName}
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-5 sm:gap-8">
            <a
              href="/"
              className="text-sm font-medium text-white transition-opacity hover:opacity-70 sm:text-base"
            >
              Home
            </a>

            <a
              href="/branches"
              className="text-sm font-medium text-white transition-opacity hover:opacity-70 sm:text-base"
            >
              Notes
            </a>
          </div>
        </nav>
      </header>

      {/* Landing Page Content */}
      <main className="relative z-10 flex min-h-screen items-center px-6 py-32 sm:px-10 lg:px-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/80 sm:text-base">
              Your Learning Space
            </p>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-8xl">
              {websiteName}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
              Your notes, your knowledge, your journey.
              Everything you need to learn and grow.
            </p>

            <div className="mt-8">
              <a
                href="/branches"
                className="inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 shadow-lg transition-transform hover:scale-105 sm:text-base"
              >
                Explore Notes
                <span className="ml-2">→</span>
              </a>
            </div>
            
            {/* LinkedIn Profile */}
            <div className="mt-5">
            <a
                href="https://www.linkedin.com/in/lokesh-reddy-b7b0a6381/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:text-gray-900 sm:text-base"
            >
                <span>Follow me on LinkedIn</span>
                <span>↗</span>
            </a>
            </div>

          </div>
        </div>
      </main>

      {/* Subtle Bottom Label */}
      <div className="absolute bottom-5 left-0 z-10 w-full px-6 text-center">
        <p className="text-xs text-white/60 sm:text-sm">
          Learn. Build. Grow.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/branches" element={<BranchSelection />} />
      <Route path="/branch/:branch" element={<SemesterSelection />} />
      <Route
        path="/branch/:branch/semester/:semester"
        element={<SemesterPage />}
      />

      <Route path="/subject/m1" element={<M1 />} />
      <Route path="/subject/edc" element={<EDC />} />
      <Route path="/subject/chemistry" element={<Chemistry />} />
      <Route path="/subject/pps" element={<PPS />} />
      <Route path="/subject/aep" element={<AEP />} />
      <Route path="/subject/bee" element={<BEE />} />
      <Route path="/subject/edcad" element={<EDCAD />} />
      <Route path="/subject/ds" element={<DS />} />
      <Route path="/subject/m2" element={<M2 />} />
    </Routes>
  );
}

export default App;