import { Link } from "react-router-dom";
import { academicPaths } from "../../utils/academicPaths";

function SubjectCard({ branchId, semesterId, subject, label = subject.code }) {
  return (
    <Link
      to={academicPaths.subject(branchId, semesterId, subject.id)}
      className="rounded-2xl border border-white/15 bg-white/10 p-7 text-left transition hover:-translate-y-1 hover:border-indigo-300/60 hover:bg-white/15"
    >
      <span className="block text-xl font-semibold">{label}</span>
      <span className="mt-3 block text-sm text-white/60">Open notes →</span>
    </Link>
  );
}

export default SubjectCard;
