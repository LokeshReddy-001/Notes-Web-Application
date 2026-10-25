const pathSegment = (value) => encodeURIComponent(value);

export const academicPaths = {
  home: () => "/",
  branches: () => "/branches",
  semesters: (branchId) => `/branches/${pathSegment(branchId)}/semesters`,
  subjects: (branchId, semesterId) =>
    `/branches/${pathSegment(branchId)}/semesters/${pathSegment(semesterId)}/subjects`,
  subject: (branchId, semesterId, subjectId) =>
    `${academicPaths.subjects(branchId, semesterId)}/${pathSegment(subjectId)}`,
  standaloneSubject: (subjectId) => `/subjects/${pathSegment(subjectId)}`,
};
