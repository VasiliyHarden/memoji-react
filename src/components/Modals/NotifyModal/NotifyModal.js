import React, { Fragment } from 'react';

const NotifyModal = ({ title, body, buttonLabel, closeHandler }) => {
  return (
    <Fragment>
      <h2 className='modal__header'>{ title }</h2>
      <p className='modal__body'>{ body }</p>
      <div className='modal__buttons'>
        <button className='modal__btn' onClick={ closeHandler }>{ buttonLabel }</button>
      </div>
    </Fragment>
  );
};

export default NotifyModal;