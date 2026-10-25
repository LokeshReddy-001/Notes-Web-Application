import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import ResourceList from "../components/academic/ResourceList";
import NotFound from "../components/common/NotFound";
import { branchesById } from "../data/branches";
import { getBranchSemester, semestersById } from "../data/semesters";
import { subjectsById } from "../data/subjects";
import { resourceIdsBySubjectId, resourcesById } from "../data/resources";
import { academicPaths } from "../utils/academicPaths";
import { getResourcesForSubject } from "../utils/resourceUtils";

function SubjectPage() {
  const navigate = useNavigate();
  const { branchId, semesterId, subjectId } = useParams();
  const subject = subjectsById[subjectId];
  const branch = branchId ? branchesById[branchId] : undefined;
  const semester = semesterId ? semestersById[semesterId] : undefined;
  const assignment = branch && semester ? getBranchSemester(branch.id, semester.id) : undefined;

  if (!subject || (branchId && !branch) || (semesterId && (!semester || !assignment))) {
    return <NotFound title="Subject not found" />;
  }
  if (assignment && !assignment.subjectIds.includes(subject.id)) {
    return <NotFound title="Subject not found" description="This subject is not listed for the selected branch and semester." />;
  }

  const resources = getResourcesForSubject(subject.id, resourceIdsBySubjectId, resourcesById);
  const title = assignment?.subjectLabels?.[subject.id] ?? subject.title;
  const backPath = branch && semester
    ? academicPaths.subjects(branch.id, semester.id)
    : academicPaths.branches();

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#152331] via-[#0b141d] to-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <button onClick={() => navigate(backPath)} className="mb-8 rounded-full border border-white/30 px-5 py-2 transition hover:bg-white hover:text-gray-900">← Back</button>
        <Breadcrumbs items={[
          { label: "Branches", to: academicPaths.branches() },
          ...(branch ? [{ label: branch.name, to: academicPaths.semesters(branch.id) }] : []),
          ...(semester && branch ? [{ label: semester.name, to: academicPaths.subjects(branch.id, semester.id) }] : []),
          { label: title },
        ]} />
        <p className="text-sm uppercase tracking-widest text-white/60">
          {branch && semester ? `${branch.name} · ${semester.name}` : "Study Resources"}
        </p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mt-4 text-white/70">Notes, study materials, and important resources.</p>
        <div className="mt-10"><ResourceList resources={resources} /></div>
      </div>
    </main>
  );
}

export default SubjectPage;
