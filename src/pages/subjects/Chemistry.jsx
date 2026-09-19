import { useState } from "react";
import SubjectPage from "../SubjectPage";   
import { FileText, FileType } from "lucide-react";
const resources = [
  {
    title: "Unit 1 (A)",
    type: "PDF",
    category: "Unit 1",
    url: "https://drive.google.com/file/d/1U7QqE-IfpWchBDJt3jJqcrj5-AJWD_cn/view?usp=sharing",
  },
  {
    title: "WATER TECHNOLOGY - UNIT 1 (B)",
    type: "PDF",
    category: "Additional Notes",
    url: "https://drive.google.com/file/d/1mgK2lRqnu67MDbTkmlaH1suJN1oVjm4Z/view?usp=sharing",
  },
  {
    title: "Chemistry unit 2 notes",
    type: "PDF",
    category: "Unit 2",
    url: "https://drive.google.com/file/d/1zCxXc01Prt3NmGxL9fXbzsTQxJN-Jj_1/view?usp=sharing",
  },
  {
    title: "Electro chemistry and corrosion",
    type: "PDF",
    category: "Additional Notes",
    url: "https://drive.google.com/file/d/1R55uJq5TkGPBRgnUm46AtV5kM2wLalXi/view?usp=sharing",
  },
  {
    title: "UNIT-3 BATTERIES",
    type: "PDF",
    category: "Unit 3",
    url: "https://drive.google.com/file/d/1ebmJj0E2MQR5XEfRGs2eFCN8tCNP5rN9/view?usp=sharing",
  },
  {
    title: "4th Unit POLYMERS",
    type: "PDF",
    category: "Unit 4",
    url: "https://drive.google.com/file/d/1e7TbXy8bM1eDqkiGAaiEF-nT_Bp9DycG/view?usp=sharing",
  },
  {
    title: "EC UNIT 5 - Smart Materials",
    type: "PDF",
    category: "Unit 5",
    url: "https://drive.google.com/file/d/1bmlfP9VIufyk4VmK5yRRmpgazE3VxzPc/view?usp=sharing",
  }
];
function Chemistry() {
    const [search, setSearch] = useState("");
    const filteredResources = resources.filter((resource) =>
    `${resource.title} ${resource.category}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  return (
    <SubjectPage subjectName="Engineering Chemistry">
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

export default Chemistry;