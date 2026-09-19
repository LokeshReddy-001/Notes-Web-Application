import { useState } from "react";
import SubjectPage from "../SubjectPage";   
import { FileText, FileType } from "lucide-react";
const resources = [
    {
    title: "UNIT-1 Crystallography and Materials Characterisation",
    type: "PDF",
    category: "Unit 1",
    url: "https://drive.google.com/file/d/1FRuG4rQOvmrwL58Cl6EOBBhdUfJwreEK/view?usp=sharing",
  },
  {
    title: "UNIT-2 Quantum Mechanics",
    type: "PDF",
    category: "Unit 2",
    url: "https://drive.google.com/file/d/1pzBvaZOoUAveVw_RmpzWbSCv1HlnKtuS/view?usp=sharing",
  },
  {
    title: "UNIT III(QUANTUM COMPUTING)",
    type: "PDF",
    category: "Unit 3",
    url: "https://drive.google.com/file/d/1b3lUMSGScYcKKLq87Fx47Awkt8RnsFom/view?usp=sharing",
  },
  {
    title: "Unit-4",
    type: "PDF",
    category: "Unit 4",
    url: "https://drive.google.com/file/d/1QDPDuojGp7lMV3oSreCFlm6qILX3wLop/view?usp=sharing",
  },
  {
    title: "UNIT - V (Fiber Optics)",
    type: "PDF",
    category: "Unit 5",
    url: "https://drive.google.com/file/d/1v1BqBt3Vi12GmJILojnJ20BRxh2uebff/view?usp=sharing",
  },
  {
    title: "Unit-V (LASER)",
    type: "PDF",
    category: "Unit 5",
    url: "https://drive.google.com/file/d/1WzZbM8mi5x32_2s4zl5-Mc4OgIyLCylJ/view?usp=sharing",
  },
  {
    title: "Model Paper 1",
    type: "PDF",
    category: "Model Paper",
    url: "https://drive.google.com/file/d/1_REQJSR78TzWJfTijsmzq1tHs8MotxPO/view?usp=sharing",
  },
  {
    title: "Model Paper 2",
    type: "PDF",
    category: "Model Paper",
    url: "https://drive.google.com/file/d/11SwTHNv0-SjYLXontyfT2b1T9DwuXUPI/view?usp=sharing",
  },
  {
    title: "Model Paper 3",
    type: "PDF",
    category: "Model Paper",
    url: "https://drive.google.com/file/d/1uXM3lrr7N2nK8iHR5PFMenB3Q93nRXLo/view?usp=sharing",
  },
  {
    title: "Model Paper 4",
    type: "PDF",
    category: "Model Paper",
    url: "https://drive.google.com/file/d/1bVA9Q2sxUeRrmztMK5x-C9xSYPuNefAl/view?usp=sharing",
  },
  {
    title: "Model Paper 5",
    type: "PDF",
    category: "Model Paper",
    url: "https://drive.google.com/file/d/19sBa1vFFhfrKdNA2e1Q3u7sBEkLPGuay/view?usp=sharing",
  },
  {
    title: "Model Paper 6",
    type: "PDF",
    category: "Model Paper",
    url: "https://drive.google.com/file/d/18lX5HuHRUjWJ7xEE2phjJEvesyX9M2i5/view?usp=sharing",
  },
];
function AEP() {
    const [search, setSearch] = useState("");
    const filteredResources = resources.filter((resource) =>
    `${resource.title} ${resource.category}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  return (
    <SubjectPage subjectName="Applied Engineering Physics (AEP)">
      <div>
        <div className="mb-8">
  <input
    type="text"
    placeholder="Search notes, units, assignments..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full rounded-2xl border border-white/20 bg-white/[0.06] px-5 py-4 text-white outline-none backdrop-blur-md transition focus:border-sky-400 placeholder:text-white/40"
  />
</div>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <h2 className="text-2xl font-bold">
                Study Materials
            </h2>

            <p className="text-sm text-white/50">
                {filteredResources.length} resources available
            </p>
            </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {filteredResources.map((resource) => (
            <div
                key={resource.title}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/60 hover:bg-white/[0.12] hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
            >
                <div className="mb-4 flex items-center gap-3">
                    {resource.type === "PDF" ? (
                        <div className="rounded-xl bg-red-500/10 p-3">
                            <FileText className="h-8 w-8 text-red-400" />
                        </div>
                    ) : (
                        <div className="rounded-xl bg-blue-500/10 p-3">
                            <FileType className="h-8 w-8 text-blue-400" />
                        </div>
                    )}

                    <span className="text-sm text-white/60">
                        {resource.type}
                    </span>
                    </div>

                <h3 className="mt-2 text-lg font-semibold">
                {resource.title}
                </h3>

                <span className="mt-2 inline-block self-start rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
                {resource.category}
                </span>

                <a
                    href={resource.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 ml-0 inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-900 transition duration-300 hover:scale-105 hover:bg-sky-300"
                    >
                    Open Resource →
                </a>
            </div>
            ))}
        </div>
        </div>
    </SubjectPage>
  );
}

export default AEP;