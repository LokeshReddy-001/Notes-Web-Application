export function getResourceType(url = "") {
  if (url.includes("docs.google.com/document/")) return "DOC";
  if (url.includes("drive.google.com/drive/folders/")) return "FOLDER";
  return "PDF";
}

export function isValidResourceUrl(value) {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return false;
    if (url.hostname === "drive.google.com") {
      return /\/drive\/folders\/|\/file\/d\//.test(url.pathname);
    }
    if (url.hostname === "docs.google.com") {
      return /\/document\/d\//.test(url.pathname);
    }
    return false;
  } catch {
    return false;
  }
}

export function getResourcesForSubject(subjectId, resourceIdsBySubjectId, resourcesById) {
  return (resourceIdsBySubjectId[subjectId] ?? [])
    .map((resourceId) => resourcesById[resourceId])
    .filter(Boolean);
}
