import { Link } from "react-router-dom";
import { academicPaths } from "../../utils/academicPaths";

function SemesterCard({ branchId, semester }) {
  return (
    <Link
      to={academicPaths.subjects(branchId, semester.id)}
      className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition-colors duration-200 hover:border-white/30"
    >
      <span className="block rounded-xl bg-white/[0.06] p-8 transition-colors duration-200 hover:bg-white/[0.1]">
        <span className="block text-2xl font-bold">{semester.name}</span>
        <span className="mt-3 block text-sm text-white/60">Choose semester →</span>
      </span>
    </Link>
  );
}

export default SemesterCard;
