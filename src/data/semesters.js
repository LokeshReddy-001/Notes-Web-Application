export const semesters = [
  { id: "1", number: 1, name: "Semester 1" },
  { id: "2", number: 2, name: "Semester 2" },
  { id: "3", number: 3, name: "Semester 3" },
];

export const semestersById = Object.fromEntries(semesters.map((semester) => [semester.id, semester]));

// This relation is the only place branch-specific subject membership is maintained.
export const branchSemesterSubjects = [
  { branchId: "cse", semesterId: "1", subjectIds: ["chemistry", "edc", "m1", "pps"] },
  { branchId: "cse", semesterId: "2", subjectIds: ["aep", "bee", "edcad", "ds", "m2"] },
  { branchId: "cse", semesterId: "3", subjectIds: ["dbms", "se", "dm", "coa", "ie", "es", "java"] },
  { branchId: "csm", semesterId: "1", subjectIds: ["aep", "bee", "edcad", "m1", "pps"] },
  { branchId: "csm", semesterId: "2", subjectIds: ["chemistry", "edc", "ds", "m2"] },
  { branchId: "csm", semesterId: "3", subjectIds: ["msf", "java", "coa", "se", "dbms"] },
  { branchId: "ece", semesterId: "1", subjectIds: ["aep", "bee", "edcad", "m1", "pps"] },
  { branchId: "ece", semesterId: "2", subjectIds: ["chemistry", "ds", "m2"] },
];

export function getBranchSemester(branchId, semesterId) {
  return branchSemesterSubjects.find(
    (entry) => entry.branchId === branchId && entry.semesterId === semesterId,
  );
}

export function getSemestersForBranch(branchId) {
  const semesterIds = branchSemesterSubjects
    .filter((entry) => entry.branchId === branchId)
    .map((entry) => entry.semesterId);
  return semesters.filter((semester) => semesterIds.includes(semester.id));
}
