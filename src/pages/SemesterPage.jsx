
import { useNavigate, useParams } from "react-router-dom";

function SemesterPage() {
  const navigate = useNavigate();
  const { branch, semester } = useParams();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-6 text-center text-white">

      <div>
        <p className="text-sm uppercase tracking-widest text-indigo-300">
          {branch.toUpperCase()}
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          Semester {semester}
        </h1>

        <p className="mt-4 text-white/60">
          Notes and subjects will be added here soon.
        </p>

        <button
          onClick={() => navigate(`/branch/${branch}`)}
          className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:scale-105"
        >
          ← Back to Semesters
        </button>
      </div>

    </div>
  );
}

export default SemesterPage;