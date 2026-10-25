export const subjects = [
  { id: "chemistry", code: "CHEMISTRY", title: "Engineering Chemistry" },
  { id: "edc", code: "EDC", title: "Electronic Devices and Circuits (EDC)" },
  { id: "m1", code: "M1", title: "Mathematics - I (M1)" },
  { id: "pps", code: "PPS", title: "Programming For Problem Solving (PPS)" },
  { id: "aep", code: "AEP", title: "Applied Engineering Physics (AEP)" },
  { id: "bee", code: "BEE", title: "Basic Electrical Engineering (BEE)" },
  { id: "edcad", code: "EDCAD", title: "Engineering Drawing and Computer Aided Design (EDCAD)" },
  { id: "ds", code: "DS", title: "Data Structures (DS)" },
  { id: "m2", code: "M2", title: "Ordinary Differential Equations and Vector Calculus (ODEVC)" },
  { id: "dbms", code: "DBMS", title: "Database Management System (DBMS)" },
  { id: "oops", code: "OOPS", title: "Object Oriented Programming" },
  { id: "se", code: "SE", title: "Software Engineering (SE)" },
  { id: "dm", code: "DM", title: "Discrete Mathematics (DM)" },
  { id: "coa", code: "COA", title: "Computer Organization and Architecture (COA)" },
  { id: "ie", code: "IE", title: "IE" },
  { id: "es", code: "ES", title: "ES" },
  { id: "java", code: "JAVA", title: "JAVA", legacyNames: ["OOPS / JAVA"] },
  { id: "msf", code: "MSF", title: "MSF" },
];

export const subjectsById = Object.fromEntries(subjects.map((subject) => [subject.id, subject]));

export function resolveSubjectId(value) {
  if (!value) return undefined;
  let decoded = value;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    // Keep the original value so malformed path segments resolve as not found.
  }
  const normalized = decoded.trim().toLowerCase();
  return subjects.find((subject) =>
    subject.id === normalized
      || subject.code.toLowerCase() === normalized
      || subject.legacyPaths?.includes(normalized)
      || subject.legacyNames?.some((name) => name.toLowerCase() === normalized)
      || subject.title.toLowerCase() === normalized,
  )?.id;
}
