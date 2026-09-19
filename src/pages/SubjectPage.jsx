import { useNavigate } from "react-router-dom";
function SubjectPage({ subjectName, children }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#152331] via-[#0b141d] to-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <button
        onClick={() => navigate(-1)}
        className="mb-8 rounded-full border border-white/30 px-5 py-2 transition hover:bg-white hover:text-gray-900"
        >
        ← Back
        </button>
        <p className="text-sm uppercase tracking-widest text-white/60">
          Study Resources
        </p>

        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
          {subjectName}
        </h1>

        <p className="mt-4 text-white/70">
          Notes, study materials, and important resources.
        </p>

        <div className="mt-10">
          {children}
        </div>
      </div>
    </div>
  );
}

export default SubjectPage;