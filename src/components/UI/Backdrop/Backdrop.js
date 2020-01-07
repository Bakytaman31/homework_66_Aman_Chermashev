import React from 'react';
import './Backdrop.css';

const Backdrop = ({show}) => (
  show ? <div className="Backdrop"/> : null
);

export default Backdrop;