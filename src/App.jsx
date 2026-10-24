import { useEffect, useRef, useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

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
import DBMS from "./pages/subjects/DBMS";
import BranchSubject from "./pages/BranchSubject";
function Home() {
  const navigate = useNavigate();
  const [showLinkedInPrompt, setShowLinkedInPrompt] = useState(false);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaRef.current) return;
    const birds = window.VANTA?.BIRDS;
    const three = window.THREE;
    if (!birds || !three) return;

    try {
      vantaEffect.current = birds({
      el: vantaRef.current,
      THREE: three,

      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      minHeight: 200.0,
      minWidth: 200.0,

      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x152331,
      });
    } catch (error) {
      console.error("Unable to start the landing page background animation:", error);
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  // Change the website name here
  const websiteName = "Baby Bullet";

  const continueToNotes = () => {
    setShowLinkedInPrompt(false);
    navigate("/branches");
  };

  return (
    <div
      ref={vantaRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#152331] via-[#0b141d] to-black"
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

            <button
              onClick={() => setShowLinkedInPrompt(true)}
              className="text-sm font-medium text-white transition-opacity hover:opacity-70 sm:text-base"
            >
              Notes
            </button>
            <a
            href="https://www.instagram.com/lokeshreddy700232?stkn=MWI1cnl6anp3NjV1Yg=="
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 py-2 text-xs font-semibold text-white shadow-lg transition duration-300 hover:scale-105 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Connect on Instagram
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
              <button
                onClick={() => setShowLinkedInPrompt(true)}
                className="inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 shadow-lg transition-transform hover:scale-105 sm:text-base"
              >
                Explore Notes
                <span className="ml-2">→</span>
              </button>
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

      {showLinkedInPrompt && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center bg-slate-950/75 px-5 py-8 backdrop-blur-sm"
          onClick={continueToNotes}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="linkedin-prompt-title"
            className="relative w-full max-w-md rounded-3xl border border-white/15 bg-slate-900 p-8 text-center text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close and continue to notes"
              onClick={continueToNotes}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              ×
            </button>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Before you explore</p>
            <h2 id="linkedin-prompt-title" className="mt-3 text-3xl font-bold">Follow me on LinkedIn</h2>
            <p className="mt-3 text-white/65">Connect with me and keep up with what I’m building.</p>
            <div className="mt-7 flex justify-center">
              <a
                href="https://www.linkedin.com/in/lokesh-reddy-b7b0a6381/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={continueToNotes}
                className="inline-flex items-center gap-2 rounded-full bg-sky-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-200"
              >
                Follow on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>
        </div>
      )}
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
      <Route
        path="/branch/:branch/semester/:semester/subject/:subject"
        element={<BranchSubject />}
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
      <Route path="/subject/dbms" element={<DBMS />} />
    </Routes>
  );
}

export default App;
