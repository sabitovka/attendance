import React, { useState } from "react"

import Loader from '../../Loader'
import "./MarkCheckbox.style.css"

export const MarkCheckbox = ({ mark }) => {
  const [markState, setMarkState] = useState(mark);
  const [loading, setLoading] = useState(false);

  const toggleMark = () => {
    if (!markState) {
      return
    }
    setLoading(true)
    setMarkState({ absent: !markState.absent })
    setTimeout(() => setLoading(false), 500)
  }
  
  const createMark = () => {
    setLoading(true)
    setMarkState({ absent: true })
    setTimeout(() => setLoading(false), 500)
  }

  if (loading) {
    return <Loader />
  }

  console.log(markState);

  return markState ?
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