import css from './Modal.module.css';
import { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <>
        <div className={css.Overlay}>
          <div className={css.Modal}>
            <img src="" alt="" />
          </div>
        </div>
      </>
    );
  }
}
export default Modal;
