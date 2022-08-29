import React, { useState } from "react"

import { useHttp } from "../../../hooks/http.hook"
import Loader from '../../Loader'
import "./MarkCheckbox.style.css"

export const MarkCheckbox = ({ mark }) => {
  const [markState, setMarkState] = useState(mark);
  const { loading, request } = useHttp();

  const toggleMark = () => {
    console.log(markState)
    if (!markState) {
      return
    }
    setMarkState({ ...markState, absent: !markState.absent });
  }
  
  const createMark = React.useCallback(async () => {
    const data = await request("http://localhost:8080/api/v1/marks", "POST", markState);
    console.log(data);
    setMarkState({ ...markState, absent: true, isToCreate: false })
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