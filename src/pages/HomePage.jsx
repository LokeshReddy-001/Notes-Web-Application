import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [showLinkedInPrompt, setShowLinkedInPrompt] = useState(false);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaRef.current) return undefined;
    const birds = window.VANTA?.BIRDS;
    const three = window.THREE;
    if (!birds || !three) return undefined;

    try {
      vantaEffect.current = birds({
        el: vantaRef.current,
        THREE: three,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        backgroundColor: 0x152331,
      });
    } catch (error) {
      console.error("Unable to start the landing page background animation:", error);
    }

    return () => vantaEffect.current?.destroy();
  }, []);

  const continueToNotes = () => {
    setShowLinkedInPrompt(false);
    navigate("/branches");
  };

  return (
    <div ref={vantaRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#152331] via-[#0b141d] to-black">
      <header className="absolute left-0 top-0 z-20 w-full">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="/" className="text-xl font-bold tracking-tight text-white sm:text-2xl">Baby Bullet</a>
          <div className="flex items-center gap-5 sm:gap-8">
            <a href="/" className="text-sm font-medium text-white transition-opacity hover:opacity-70 sm:text-base">Home</a>
            <button onClick={continueToNotes} className="text-sm font-medium text-white transition-opacity hover:opacity-70 sm:text-base">Notes</button>
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

      <main className="relative z-10 flex min-h-screen items-center px-6 py-32 sm:px-10 lg:px-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/80 sm:text-base">Your Learning Space</p>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-8xl">Baby Bullet</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
              Your notes, your knowledge, your journey. Everything you need to learn and grow.
            </p>
            <div className="mt-8">
              <button onClick={() => setShowLinkedInPrompt(true)} className="inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 shadow-lg transition-transform hover:scale-105 sm:text-base">
                Explore Notes <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="absolute bottom-5 left-0 z-10 w-full px-6 text-center">
        <p className="text-xs text-white/60 sm:text-sm">Learn. Build. Grow.</p>
      </div>

      {showLinkedInPrompt && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-slate-950/75 px-5 py-8 backdrop-blur-sm" onClick={continueToNotes}>
          <section role="dialog" aria-modal="true" aria-labelledby="linkedin-prompt-title" className="relative w-full max-w-md rounded-3xl border border-white/15 bg-slate-900 p-8 text-center text-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button type="button" aria-label="Close and continue to notes" onClick={continueToNotes} className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-white/60 transition hover:bg-white/10 hover:text-white">×</button>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Before you explore</p>
            <h2 id="linkedin-prompt-title" className="mt-3 text-3xl font-bold">Follow me on LinkedIn</h2>
            <p className="mt-3 text-white/65">Connect with me and keep up with what I’m building.</p>
            <div className="mt-7 flex justify-center">
              <a href="https://www.linkedin.com/in/lokesh-reddy-b7b0a6381/" target="_blank" rel="noopener noreferrer" onClick={continueToNotes} className="inline-flex items-center gap-2 rounded-full bg-sky-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-200">
                Follow on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default HomePage;
