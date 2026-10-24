import { useParams } from "react-router-dom";
import SubjectPage from "./SubjectPage";
import M1 from "./subjects/M1";
import EDC from "./subjects/EDC";
import Chemistry from "./subjects/Chemistry";
import PPS from "./subjects/PPS";
import AEP from "./subjects/AEP";
import BEE from "./subjects/BEE";
import EDCAD from "./subjects/EDCAD";
import DS from "./subjects/DS";
import M2 from "./subjects/M2";
import DBMS from "./subjects/DBMS";
import LinkedSubject from "./LinkedSubject";
import { semester3Resources } from "../data/semester3Resources";

const existingNotes = {
  M1, EDC, CHEMISTRY: Chemistry, PPS, AEP, BEE, EDCAD, DS, M2, DBMS,
};

function BranchSubject() {
  const { subject } = useParams();
  const subjectKey = subject?.toUpperCase();
  const ExistingSubject = existingNotes[subjectKey];

  if (semester3Resources[subjectKey]) {
    return <LinkedSubject subjectName={subjectKey} resources={semester3Resources[subjectKey]} />;
  }

  if (ExistingSubject) return <ExistingSubject />;

  return (
    <SubjectPage subjectName={subject}>
      <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-white/70">
        Notes for this subject can be added in its branch catalog when they are ready.
      </div>
    </SubjectPage>
  );
}

export default BranchSubject;
