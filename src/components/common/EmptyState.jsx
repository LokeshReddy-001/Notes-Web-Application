function EmptyState({ title = "No resources yet", description = "Check back later for study materials." }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-8 text-center text-white/70">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
}

export default EmptyState;
