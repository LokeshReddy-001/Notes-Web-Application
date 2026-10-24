
import { useNavigate, useParams } from "react-router-dom";
import cse from "../data/branches/cse/index.js";
import csm from "../data/branches/csm/index.js";
import ece from "../data/branches/ece/index.js";

const branches = { cse, csm, ece };

function SemesterPage() {
  const navigate = useNavigate();
  const { branch, semester } = useParams();
  const branchData = branches[branch?.toLowerCase()];
  const subjects = branchData?.semesters[semester] ?? [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#152331] via-[#0b141d] to-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <button
          onClick={() => navigate(`/branch/${branch}`)}
          className="rounded-full border border-white/30 px-5 py-2 text-sm transition hover:bg-white hover:text-gray-900"
        >
          ← Back to Semesters
        </button>

        <header className="my-12 text-center">
          <p className="text-sm uppercase tracking-widest text-indigo-300">{branchData?.name ?? branch}</p>
          <h1 className="mt-3 text-4xl font-bold">Semester {semester}</h1>
          <p className="mt-3 text-white/65">Choose a subject to open its notes.</p>
        </header>

        {subjects.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <button
                key={subject}
                onClick={() => navigate(`/branch/${branch}/semester/${semester}/subject/${encodeURIComponent(subject)}`)}
                className="rounded-2xl border border-white/15 bg-white/10 p-7 text-left transition hover:-translate-y-1 hover:border-indigo-300/60 hover:bg-white/15"
              >
                <h2 className="text-xl font-semibold">{subject}</h2>
                <p className="mt-3 text-sm text-white/60">Open notes →</p>
              </button>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-center text-white/70">
            No subjects are listed for this semester yet.
          </p>
        )}
      </div>
    </div>
  );
}

export default SemesterPage;
