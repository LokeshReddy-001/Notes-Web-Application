import { Link } from "react-router-dom";
import { academicPaths } from "../../utils/academicPaths";

function NotFound({ title = "Page not found", description = "That page or academic selection does not exist." }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#152331] via-[#0b141d] to-black px-6 text-center text-white">
      <div className="max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">404</p>
        <h1 className="mt-3 text-4xl font-bold">{title}</h1>
        <p className="mt-4 text-white/65">{description}</p>
        <Link to={academicPaths.branches()} className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-sky-200">
          Browse branches
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
