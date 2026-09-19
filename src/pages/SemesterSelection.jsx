
import { useNavigate, useParams } from "react-router-dom";

const subjects = {
  cse: {
    1: ["CHEMISTRY", "EDC", "M1", "PPS"],
    2: ["AEP", "BEE", "EDCAD", "DS", "M2"],
  },
  csm: {
    1: ["AEP", "BEE", "EDCAD", "M1", "PPS"],
    2: ["CHEMISTRY", "EDC", "DS", "M2"],
  },
  ece: {
    1: ["AEP", "BEE", "EDCAD", "M1", "PPS"],
    2: ["CHEMISTRY", "DS", "M2"],
  },
};

function SemesterSelection() {
  const navigate = useNavigate();
  const { branch } = useParams();

  const branchSubjects = subjects[branch];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-6 py-16 text-white">
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
          {branch} - Select Semester
        </h1>

        <div className="grid gap-8 sm:grid-cols-2">
          {[1, 2].map((semester) => (
            <div
              key={semester}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md"
            >
              <h2 className="mb-5 text-2xl font-bold">
                Semester {semester}
              </h2>

              <div className="space-y-3">
                {branchSubjects[semester].map((subject) => (
                  <button
                    key={subject}
                    onClick={() => {
                    if (subject === "M1") {
                      navigate("/subject/m1");
                    } else if (subject === "EDC") {
                      navigate("/subject/edc");
                    } else if (subject === "CHEMISTRY") {
                      navigate("/subject/chemistry");
                    } else if (subject === "PPS") {
                      navigate("/subject/pps");
                    } else if (subject === "AEP") {
                      navigate("/subject/aep");
                    } else if (subject === "BEE") {
                      navigate("/subject/bee");
                    } else if (subject === "EDCAD") {
                      navigate("/subject/edcad");
                    } else if (subject === "DS") {
                      navigate("/subject/ds");
                    } else if (subject === "M2") {
                      navigate("/subject/m2");
                    } else {
                      navigate(`/branch/${branch}/semester/${semester}`);
                    }
                  }}
                    className="w-full rounded-xl bg-white/10 px-4 py-3 text-left font-medium transition hover:bg-white hover:text-gray-900"
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SemesterSelection;