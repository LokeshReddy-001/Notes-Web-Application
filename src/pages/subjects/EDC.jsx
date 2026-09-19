import { useState } from "react";
import SubjectPage from "../SubjectPage";   
import { FileText, FileType } from "lucide-react";
const resources = [
  {
    title: "EDC UNIT-I (DIODES)",
    type: "PDF",
    category: "Unit 1",
    url: "https://drive.google.com/file/d/1CC6tNVRBtvsAanP7PK-ldj9xL2ChBZp9/view?usp=sharing",
  },
  {
    title: "R-25 EDC UNIT-1",
    type: "PDF",
    category: "Unit 1 - R25",
    url: "https://drive.google.com/file/d/1oNRDBubSaxEDHmbSlEOkNiiRLm34fj2f/view?usp=sharing",
  },
  {
    title: "EDC UNIT-II (DIODE APPLICATIONS)-1",
    type: "PDF",
    category: "Unit 2",
    url: "https://drive.google.com/file/d/1qz2bAfVtNYIYc3j5-vHgVCvtCBi9N-D6/view?usp=sharing",
  },
  {
    title: "R-25 EDC UNIT 2",
    type: "PDF",
    category: "Unit 2 - R25",
    url: "https://drive.google.com/file/d/1gbOkHZFp_qJic8BRASzB4XFQyRnYf5X9/view?usp=sharing",
  },
  {
    title: "EDC UNIT-III (BJT)",
    type: "PDF",
    category: "Unit 3",
    url: "https://drive.google.com/file/d/1-FlLB8ECEKSqN0fGbmeS9GSUbcR6IedC/view?usp=sharing",
  },
  {
    title: "R-25 EDC UNIT-3",
    type: "PDF",
    category: "Unit 3 - R25",
    url: "https://drive.google.com/file/d/1seELXFP8rvYEBEsb-dUIyBBsreZ-BxVV/view?usp=sharing",
  },
  {
    title: "R25 EDC Unit 4",
    type: "PDF",
    category: "Unit 4 - R25",
    url: "https://drive.google.com/file/d/11NgUelZ_RBEvJXZl6uqw9MM-p_TCTrY4/view?usp=sharing",
  },
  {
    title: "EDC UNIT 5 without JFET & MOSFET",
    type: "PDF",
    category: "Unit 5",
    url: "https://drive.google.com/file/d/1reAcccSmsH34stoC1JoTIpd0_OXYQXnv/view?usp=sharing",
  },
  {
    title: "EDC UNIT-V (FET)-1",
    type: "PDF",
    category: "Unit 5",
    url: "https://drive.google.com/file/d/1gOqMDDaZoRPzzYW8uek24xPR2_MWcL_1/view?usp=sharing",
  },
  {
    title: "EDC SHORT QUESTIONS (1)",
    type: "PDF",
    category: "Short Questions",
    url: "https://docs.google.com/document/d/1zyZ7LiPz8iUIOCtEMqss6ZY8CHA4bHH2_0CFADsiLng/edit?usp=sharing",
  },
  {
    title: "EDC IMPORTANT",
    type: "PDF",
    category: "Important Questions",
    url: "https://docs.google.com/document/d/1cUtISq8WmRq83psaJO8Ex5fRaHY133453Oes6Mfj_nI/edit?usp=sharing",
  },
  {
    title: "EDC IMPORTANT(MID-1)",
    type: "PDF",
    category: "Important Questions",
    url: "https://docs.google.com/document/d/1niv7ZkB3srGxT6oMmbfwddDbBgqmqJowW8lP_9LW_fg/edit?usp=sharing",
  },
];
function EDC() {
    const [search, setSearch] = useState("");
    const filteredResources = resources.filter((resource) =>
    `${resource.title} ${resource.category}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  return (
    <SubjectPage subjectName="Electronic Devices and Circuits (EDC)">
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

export default EDC;