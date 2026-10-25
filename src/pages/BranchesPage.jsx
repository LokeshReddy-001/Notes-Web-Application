import { useNavigate } from "react-router-dom";
import BranchCard from "../components/academic/BranchCard";
import { branches } from "../data/branches";

function BranchesPage() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#152331] via-[#0b141d] to-black px-6 py-12 text-white sm:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 flex items-center justify-between gap-4">
          <button onClick={() => navigate("/")} className="text-sm text-white/70 transition hover:text-white">← Back to Home</button>
          <a href="https://www.instagram.com/lokeshreddy700232?stkn=MWI1cnl6anp3NjV1Yg==" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 py-2 text-xs font-semibold text-white shadow-lg transition duration-300 hover:scale-105 sm:px-5 sm:py-2.5 sm:text-sm">Connect on Instagram</a>
        </header>
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Choose Your Branch</h1>
          <p className="mt-4 text-white/70">Select your branch to explore the available semesters.</p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch) => <BranchCard key={branch.id} branch={branch} />)}
        </div>
      </div>
    </main>
  );
}

export default BranchesPage;
