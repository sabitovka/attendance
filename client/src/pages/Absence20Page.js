import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AbsenceTable } from "../components/AbsenceTable";
import { PeriodButtonsMonth } from "../components/PeriodButtonsWeek";

import { absence20students } from "../fake-data"

const Absence20Page = () => {

  return (
    <main className="main">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
            <h4 className="mt-3 mb-4">Студенты с пропусками больше 20%</h4>
            <div>
            <button className="btn btn-primary">
              Скачать
              <FontAwesomeIcon icon={faFileArrowDown} className={"ms-2"}/>  
            </button>
          </div>
        </div>

        <PeriodButtonsMonth onPeriodSelected={console.log} />
        <AbsenceTable students={absence20students} />

      </div>
    </main>
  );
}

export default Absence20Page;