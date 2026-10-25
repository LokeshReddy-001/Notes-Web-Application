import { Navigate, useParams, useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BranchesPage from "../pages/BranchesPage";
import SemestersPage from "../pages/SemestersPage";
import SemesterSubjectsPage from "../pages/SemesterSubjectsPage";
import SubjectPage from "../pages/SubjectPage";
import NotFoundPage from "../pages/NotFoundPage";
import { branchesById } from "../data/branches";
import { getBranchSemester, semestersById } from "../data/semesters";
import { resolveSubjectId } from "../data/subjects";
import { academicPaths } from "../utils/academicPaths";

function LegacyBranchRedirect() {
  const { branch } = useParams();
  const branchId = branch?.toLowerCase();
  return branchesById[branchId]
    ? <Navigate replace to={academicPaths.semesters(branchId)} />
    : <NotFoundPage />;
}

function LegacySemesterRedirect() {
  const { branch, semester } = useParams();
  const branchId = branch?.toLowerCase();
  const semesterId = semester?.replace(/^semester-/, "");
  if (!branchesById[branchId] || !semestersById[semesterId] || !getBranchSemester(branchId, semesterId)) {
    return <NotFoundPage />;
  }
  return <Navigate replace to={academicPaths.subjects(branchId, semesterId)} />;
}

function LegacySubjectRedirect({ standalone = false }) {
  const { branch, semester, subject: legacySubject, subjectId: routeSubjectId } = useParams();
  const subjectId = resolveSubjectId(routeSubjectId ?? legacySubject);
  if (!subjectId) return <NotFoundPage />;

  if (standalone) return <Navigate replace to={academicPaths.standaloneSubject(subjectId)} />;

  const branchId = branch?.toLowerCase();
  const semesterId = semester?.replace(/^semester-/, "");
  const assignment = getBranchSemester(branchId, semesterId);
  if (!branchesById[branchId] || !semestersById[semesterId] || !assignment?.subjectIds.includes(subjectId)) {
    return <NotFoundPage />;
  }
  return <Navigate replace to={academicPaths.subject(branchId, semesterId, subjectId)} />;
}

const routeDefinitions = [
  { path: "/", element: <HomePage /> },
  { path: "/branches", element: <BranchesPage /> },
  { path: "/branches/:branchId/semesters", element: <SemestersPage /> },
  { path: "/branches/:branchId/semesters/:semesterId/subjects", element: <SemesterSubjectsPage /> },
  { path: "/branches/:branchId/semesters/:semesterId/subjects/:subjectId", element: <SubjectPage /> },
  { path: "/subjects/:subjectId", element: <SubjectPage /> },

  // Compatibility routes for links saved before the canonical route hierarchy.
  { path: "/branch/:branch/semester/:semester/subject/:subject", element: <LegacySubjectRedirect /> },
  { path: "/branch/:branch/semester/:semester", element: <LegacySemesterRedirect /> },
  { path: "/branch/:branch", element: <LegacyBranchRedirect /> },
  { path: "/subject/:subjectId", element: <LegacySubjectRedirect standalone /> },
  { path: "*", element: <NotFoundPage /> },
];

function AppRoutes() {
  return useRoutes(routeDefinitions);
}

export default AppRoutes;
