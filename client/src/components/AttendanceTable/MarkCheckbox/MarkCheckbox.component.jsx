import React, { useState } from "react"

import { useHttp } from "../../../hooks/http.hook"
import Loader from '../../Loader'
import "./MarkCheckbox.style.css"

export const MarkCheckbox = ({ mark }) => {
  const [markState, setMarkState] = useState(mark);
  const { loading, request } = useHttp();

  const toggleMark = React.useCallback(async () => {
    if (!markState) {
      return
    }
    const data = await request("http://localhost:8080/api/v1/marks/" + markState.id, "PUT", { ...markState, absent: !markState.absent });
    setMarkState(data);
  })
  
  const createMark = React.useCallback(async () => {
    const data = await request("http://localhost:8080/api/v1/marks", "POST", { ...markState, absent: true });
    setMarkState(data);
  })

  if (loading) {
    return <Loader />
  }

  if (!markState) {
    return <span className="text-muted">-</span>
  }

  return !markState.isToCreate ?
    <input
      className="mark-cb px-auto"
      type="checkbox"
      checked={markState.absent}
      onChange={toggleMark}
    /> :
    <input
      type="checkbox"
      defaultChecked={false}
      onClick={createMark} />
}