import React, { useState } from "react";
import NextPage from "../resultdetail2/NextPage";
import TeachersList from '../resultdetail2/TeachersList';

import './Forms.css';
import ThreePage from "../resultdetail2/ThreePage";
import TeachersFormResult from "../TeachersFormR/TeachersFormResult";
import DeptResult from "../DeptFormR/DeptResult";
export default function Forms() {
  const [current, setCurrent] = useState("teacherList");
  const [selectedTeacher, setSelectedTeacher] = useState();
  const [evaluationView, setEvaluationView] = useState(null);

  return (
    <div> 
       <div className="firstText1">
          <h1>DEBRE BERHAN UNIVERSITY</h1>
          <h2>Teachers Performance Evaluation Form</h2> 
        </div>
        <h3>
        {/* <h4>Select one of the teachers to see the evaluation result!</h4> */}

        {current === "evaluationForm" && !evaluationView && (
          <button className="buttonn" onClick={() => setCurrent("teacherList")}>
            Back to teacher list
          </button>
        )}
        {evaluationView && (
          <button className="buttonn" onClick={() => setEvaluationView(null)}>
            Back to evaluation form
          </button>
        )}
      </h3>

      {current && current === "teacherList" && (
        <TeachersList
          setCurrent={setCurrent}
          setSelectedTeacher={setSelectedTeacher}
        />
      )}

         {current === "evaluationForm" && !evaluationView && (
        <ThreePage setEvaluationView={setEvaluationView} />
      )} 

      {current && current === "studentResult" && (
        <NextPage teacher={selectedTeacher} /> 
      )}
      

      {evaluationView === "peerResult" && (
        <TeachersFormResult teacher={selectedTeacher} />
      )}


      {evaluationView === "departmentResult" && (
        <DeptResult teacher={selectedTeacher} />
      )}
    </div>
  );
}
