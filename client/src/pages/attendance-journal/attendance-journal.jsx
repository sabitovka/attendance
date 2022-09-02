import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import DatePicker, { registerLocale } from "react-datepicker"
import { useLazyQuery } from '@apollo/client';

import AttendanceTable from "./components/attendance-table"
import Loader from "../../components/loader"
import { isWeekday } from "../../common/utils"
import { GET_ATTENDANCE_OF_GROUP } from '../../Queries';

import ru from "date-fns/locale/ru"

registerLocale('ru', ru);

export default function AttendanceJournal() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [marksData, setMarksData] = useState()
  const [executeQuery, { loading, data }] = useLazyQuery(GET_ATTENDANCE_OF_GROUP);

  useEffect(() => {
    executeQuery({ variables: {
      groupId: 1, markDate: selectedDate.toISOString()
    } });
  }, [selectedDate, executeQuery]);

  useEffect(() => {
    if (!data) {
      return;
    }
    const { bells, group: { students } } = data;
    setMarksData({ bells, students });
  }, [data]);

  console.log({data, loading, marksData});

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
              { (marksData && !loading) ? <AttendanceTable data={marksData} date={selectedDate} /> : <Loader /> }
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