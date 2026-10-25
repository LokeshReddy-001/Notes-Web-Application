import { Link } from "react-router-dom";
import { academicPaths } from "../../utils/academicPaths";

function BranchCard({ branch }) {
  return (
    <Link
      to={academicPaths.semesters(branch.id)}
      className="group rounded-2xl border border-white/15 bg-white/10 p-10 text-center shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-indigo-300/60 hover:bg-white/15"
    >
      <h2 className="text-3xl font-bold tracking-wide">{branch.name}</h2>
      <p className="mt-3 text-sm text-white/60">Explore Notes →</p>
    </Link>
  );
}

export default BranchCard;
