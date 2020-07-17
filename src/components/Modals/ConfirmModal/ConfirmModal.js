import React, { Fragment } from 'react';

const ConfirmModal = ({ title, body, submitHandler, closeHandler }) => {
  return (
    <Fragment>
      <h2 className='modal__header'>{ title }</h2>
      <p className='modal__body'>{ body }</p>
      <div className='modal__buttons'>
        <button className='modal__btn' onClick={ submitHandler }>Yes</button>
        <button className='modal__btn' onClick={ closeHandler }>No</button>
      </div>
    </Fragment>
  );
};

export default ConfirmModal;