export const branches = [
  { id: "cse", name: "CSE" },
  { id: "csm", name: "CSM" },
  { id: "ece", name: "ECE" },
];

export const branchesById = Object.fromEntries(branches.map((branch) => [branch.id, branch]));
