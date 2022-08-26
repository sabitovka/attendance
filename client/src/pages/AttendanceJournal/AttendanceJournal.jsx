import React, { useState, useCallback } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import DatePicker, { registerLocale } from "react-datepicker"
import { useLazyQuery } from '@apollo/client';

import { isWeekday } from "../../common/utils"
import AttendanceTable from "../../components/AttendanceTable"
import Loader from "../../components/Loader"
import { GET_ATTENDANCE_OF_GROUP } from "../../Queries"

import ru from "date-fns/locale/ru"
import { useEffect } from "react";

registerLocale('ru', ru);

export default function AttendanceJournal() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [getAttendanceData, { loading, error, data }] = useLazyQuery(GET_ATTENDANCE_OF_GROUP);
  
  const fetchAttendanceData = useCallback(() => {
    getAttendanceData({ variables: {
      groupId: 1, dayId: 1, weekId: 1, markDate: "2022-08-18"
    } });
    console.log(selectedDate, error, loading, data)
  }, [getAttendanceData, selectedDate, error, loading, data])
  
  useEffect(() => {
    fetchAttendanceData()
  }, [fetchAttendanceData, selectedDate])

  return (
    <main className="main">
        <div className="container">
            <div className="row mt-5 mb-3">
                <h4 className="col-10">Журнал посещаемости группы *ИСзск-19{/* {data ? data.group.name : <Loader />} */}</h4>
                {
                  false
                    ?
                      <Loader /> 
                    :
                    <div className="current-date col-2 text-end lh-1 fw-bolder d-flex justify-content-end align-items-center">
                      <FontAwesomeIcon icon={faCalendar} />
                      <span>*Понедельник, 02 мая 2022, четная неделя</span>
                    </div>
                }
            </div>
            <div className="d-flex justify-content-between">
              { (loading || !data) ? <Loader /> : <AttendanceTable bells={data.bells} students={data.group.students}/> }
              <div style={{ marginLeft: '2rem' }}>
                <DatePicker
                  inline
                  fixedHeight
                  filterDate={isWeekday}
                  locale="ru"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                />
              </div>
            </div>
        </div>
    </main>
  )
}