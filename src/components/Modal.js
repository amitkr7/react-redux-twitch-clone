import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = () => {
    //Use portal to show modal alongside root element
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push('/')}
      className='ui dimmer modals visible active'>
      <div
        onClick={(e) => e.stopPropagation()}
        className='ui standard modal visble active'>
        <div className='header'>Delete Stream</div>
        <div className='content'>
          Are you sure you want to delete this stream?
        </div>
        <div className='actions'>
          <buttton className='ui red button'>Delete</buttton>
          <button className='ui button'>Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
