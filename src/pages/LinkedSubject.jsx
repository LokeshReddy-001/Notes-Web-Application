import { useState } from "react";
import { FileText, FileType, FolderOpen } from "lucide-react";
import SubjectPage from "./SubjectPage";
import { resourceType } from "../data/semester3Resources";

function LinkedSubject({ subjectName, resources }) {
  const [search, setSearch] = useState("");
  const filteredResources = resources.filter((resource) =>
    `${resource.title} ${resource.category}`.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SubjectPage subjectName={subjectName}>
      <input
        type="search"
        placeholder="Search notes and units..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="mb-8 w-full rounded-2xl border border-white/20 bg-white/[0.06] px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-sky-400"
      />
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-bold">Study Materials</h2>
        <p className="text-sm text-white/50">{filteredResources.length} resources available</p>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {filteredResources.map((resource) => {
          const type = resourceType(resource.url);
          const Icon = type === "DOC" ? FileType : type === "FOLDER" ? FolderOpen : FileText;
          return (
            <article key={`${resource.category}-${resource.title}`} className="flex min-h-52 flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition hover:border-sky-400/60 hover:bg-white/[0.12]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Icon className="h-7 w-7 shrink-0 text-sky-300" />
                  <span className="text-sm text-white/60">{type}</span>
                </div>
                <span className="shrink-0 rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
                  {resource.category}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{resource.title}</h3>
              <a href={resource.url} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex self-start rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-900 transition hover:bg-sky-300">Open Resource →</a>
            </article>
          );
        })}
      </div>
    </SubjectPage>
  );
}

export default LinkedSubject;
