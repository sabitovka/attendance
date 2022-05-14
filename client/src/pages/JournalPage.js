import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AttendanceTable } from "../components/AttendanceTable"
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import { attendanceData } from "../fake-data"

const JournalPage = () => {
  return (
    <main className="main">
        <div className="container">
            <div className="row mt-5 mb-3">
                <h4 className="col-10">Журнал посещаемости группы {attendanceData.groupName}</h4>
                <div className="current-date col-2 text-end lh-1 fw-bolder d-flex justify-content-end align-items-center">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span>Понедельник, 02 мая 2022, четная неделя</span>
                </div>
            </div>
            <AttendanceTable data={attendanceData}/>
        </div>
    </main>
  )
}

export default JournalPage;