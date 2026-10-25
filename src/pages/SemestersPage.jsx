import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import SemesterCard from "../components/academic/SemesterCard";
import NotFound from "../components/common/NotFound";
import { branchesById } from "../data/branches";
import { getSemestersForBranch } from "../data/semesters";
import { academicPaths } from "../utils/academicPaths";

function SemestersPage() {
  const navigate = useNavigate();
  const { branchId } = useParams();
  const branch = branchesById[branchId];
  if (!branch) return <NotFound title="Branch not found" />;
  const branchSemesters = getSemestersForBranch(branch.id);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#152331] via-[#0b141d] to-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <button onClick={() => navigate(academicPaths.branches())} className="mb-8 rounded-full border border-white/30 px-5 py-2 text-sm transition hover:bg-white hover:text-gray-900">← Back to Branches</button>
        <Breadcrumbs items={[{ label: "Branches", to: academicPaths.branches() }, { label: branch.name }, { label: "Semesters" }]} />
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold uppercase">{branch.name} - Select Semester</h1>
        </header>
        {branchSemesters.length ? (
          <div className="grid gap-8 sm:grid-cols-2">
            {branchSemesters.map((semester) => <SemesterCard key={semester.id} branchId={branch.id} semester={semester} />)}
          </div>
        ) : <p className="text-center text-white/70">No semesters are available for this branch yet.</p>}
      </div>
    </main>
  );
}

export default SemestersPage;
