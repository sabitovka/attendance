import React from "react";

export default function ColumnHeader() {
    return (
        <div className="d-flex flex-column text-center overflow-hidden" style={{ maxWidth: 200 }}>
            <span className="text-muted">*время звонков</span>
            { Math.random() > 0.5 ? 
            (<>
            <span className="lh-1 mb-2">*дисциплина Facere hic repudiandae</span>
            <span className="lh-1">*имя препода Autem explicabo aliquid</span>
            </>) : <span className="text-muted">Нет пары</span> } 
        </div> 
    )
}