import { Link } from "react-router-dom";

function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/60">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.to ? <Link className="transition hover:text-white" to={item.to}>{item.label}</Link> : <span className="text-white">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
