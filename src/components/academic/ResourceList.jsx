import { useMemo, useState } from "react";
import EmptyState from "../common/EmptyState";
import ResourceCard from "./ResourceCard";

function ResourceList({ resources }) {
  const [search, setSearch] = useState("");
  const filteredResources = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return resources;
    return resources.filter((resource) => `${resource.title} ${resource.category}`.toLowerCase().includes(query));
  }, [resources, search]);

  return (
    <section>
      <input
        type="search"
        aria-label="Search study resources"
        placeholder="Search notes, units, assignments..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="mb-8 w-full rounded-2xl border border-white/20 bg-white/[0.06] px-5 py-4 text-white outline-none backdrop-blur-md transition placeholder:text-white/40 focus:border-sky-400"
      />
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-bold">Study Materials</h2>
        <p className="text-sm text-white/50">{filteredResources.length} resources available</p>
      </div>
      {filteredResources.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {filteredResources.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}
        </div>
      ) : (
        <div className="mt-5"><EmptyState title="No matching resources" description={resources.length ? "Try another search term." : "Notes for this subject will be added soon."} /></div>
      )}
    </section>
  );
}

export default ResourceList;
