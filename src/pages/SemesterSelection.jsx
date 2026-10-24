
import { useNavigate, useParams } from "react-router-dom";
import cse from "../data/branches/cse/index.js";
import csm from "../data/branches/csm/index.js";
import ece from "../data/branches/ece/index.js";

const branches = { cse, csm, ece };

function SemesterSelection() {
  const navigate = useNavigate();
  const { branch } = useParams();

  const branchData = branches[branch?.toLowerCase()];

  if (!branchData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center text-white">
        <div>
          <h1 className="text-3xl font-bold">Branch not found</h1>
          <button onClick={() => navigate("/branches")} className="mt-6 rounded-full bg-white px-5 py-2 text-slate-900">Choose a branch</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#152331] via-[#0b141d] to-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">

  {/* Top Bar */}
  <div className="mb-12 flex items-center justify-between gap-4">

    <button
      onClick={() => navigate("/branches")}
      className="rounded-full border border-white/30 px-5 py-2 text-sm transition hover:bg-white hover:text-gray-900"
    >
      ← Back
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
        

        <h1 className="mb-12 text-center text-4xl font-bold uppercase">
          {branchData.name} - Select Semester
        </h1>

        <div className="grid gap-8 sm:grid-cols-2">
          {Object.keys(branchData.semesters).map((semester) => (
            <div
              key={semester}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md"
            >
              <button
                onClick={() => navigate(`/branch/${branch}/semester/${semester}`)}
                className="w-full rounded-xl bg-white/[0.06] p-8 text-left transition-colors duration-200 hover:bg-white/[0.1]"
              >
                <h2 className="text-2xl font-bold">Semester {semester}</h2>
                <p className="mt-3 text-sm text-white/60">Choose semester →</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SemesterSelection;
