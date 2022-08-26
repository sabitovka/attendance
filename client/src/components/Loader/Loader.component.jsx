import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export const Loader = ({ className = '' }) => (
  <Spinner
    animation="border"
    role="status"
    className={`${className}`}>
  </Spinner>
)
