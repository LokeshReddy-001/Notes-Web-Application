import { FileText, FileType, FolderOpen } from "lucide-react";
import { getResourceType } from "../../utils/resourceUtils";

function ResourceCard({ resource }) {
  const type = getResourceType(resource.url);
  const Icon = type === "DOC" ? FileType : type === "FOLDER" ? FolderOpen : FileText;

  return (
    <article className="group relative flex min-h-52 flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/60 hover:bg-white/[0.12] hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
      <div className="mb-4 flex items-center gap-3">
        <div className={`rounded-xl p-3 ${type === "PDF" ? "bg-red-500/10" : "bg-blue-500/10"}`}>
          <Icon className={`h-8 w-8 ${type === "PDF" ? "text-red-400" : "text-sky-300"}`} />
        </div>
        <span className="text-sm text-white/60">{type}</span>
      </div>
      <h3 className="mt-2 text-lg font-semibold">{resource.title}</h3>
      <span className="absolute right-5 top-5 inline-block rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">{resource.category}</span>
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex self-start rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-900 transition duration-300 hover:scale-105 hover:bg-sky-300"
      >
        Open Resource →
      </a>
    </article>
  );
}

export default ResourceCard;
