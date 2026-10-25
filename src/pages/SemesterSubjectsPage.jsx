import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import SubjectCard from "../components/academic/SubjectCard";
import EmptyState from "../components/common/EmptyState";
import NotFound from "../components/common/NotFound";
import { branchesById } from "../data/branches";
import { getBranchSemester, semestersById } from "../data/semesters";
import { subjectsById } from "../data/subjects";
import { academicPaths } from "../utils/academicPaths";

function SemesterSubjectsPage() {
  const navigate = useNavigate();
  const { branchId, semesterId } = useParams();
  const branch = branchesById[branchId];
  const semester = semestersById[semesterId];
  const branchSemester = getBranchSemester(branchId, semesterId);
  if (!branch || !semester || !branchSemester) return <NotFound title="Semester not found" />;
  const entries = branchSemester.subjectIds.map((subjectId) => ({
    subject: subjectsById[subjectId],
    label: branchSemester.subjectLabels?.[subjectId] ?? subjectsById[subjectId]?.code,
  })).filter((entry) => entry.subject);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#152331] via-[#0b141d] to-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <button onClick={() => navigate(academicPaths.semesters(branch.id))} className="mb-8 rounded-full border border-white/30 px-5 py-2 text-sm transition hover:bg-white hover:text-gray-900">← Back to Semesters</button>
        <Breadcrumbs items={[{ label: "Branches", to: academicPaths.branches() }, { label: branch.name, to: academicPaths.semesters(branch.id) }, { label: semester.name }, { label: "Subjects" }]} />
        <header className="my-12 text-center">
          <p className="text-sm uppercase tracking-widest text-indigo-300">{branch.name}</p>
          <h1 className="mt-3 text-4xl font-bold">{semester.name}</h1>
          <p className="mt-3 text-white/65">Choose a subject to open its notes.</p>
        </header>
        {entries.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {entries.map(({ subject, label }) => <SubjectCard key={subject.id} branchId={branch.id} semesterId={semester.id} subject={subject} label={label} />)}
          </div>
        ) : <EmptyState title="No subjects yet" description="Subjects for this semester will be added soon." />}
      </div>
    </main>
  );
}

export default SemesterSubjectsPage;
