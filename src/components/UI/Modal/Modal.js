import React, {Fragment} from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";
import Spinner from "../Spinner/Spinner";

const Modal = props => (
  <Fragment>
    <Backdrop
      show={props.show}
    />
    <Spinner/>
  </Fragment>
);

export default Modal;