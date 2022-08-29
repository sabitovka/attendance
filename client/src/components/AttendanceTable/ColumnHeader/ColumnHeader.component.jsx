import React from "react";

export default function ColumnHeader({ bell }) {
    const trim = (timeStr) => timeStr.slice(0, timeStr.lastIndexOf(':'));
    const timeStr = `${trim(bell.startTime)}-${trim(bell.endTime)}`;

    return (
        <div className="d-flex flex-column text-center overflow-hidden" style={{ maxWidth: 200 }}>
            <span className="text-muted">{timeStr}</span>
            {
                bell.lessons.length > 0 ?
                (<>
                <span className="lh-1 mb-2">{bell.lessons[0].discipline.shortName}</span>
                <span className="lh-1">{bell.lessons[0].teacher.fullname}</span>
                </>) : <span className="text-muted">Нет пары</span> 
            }
        </div> 
    )
}