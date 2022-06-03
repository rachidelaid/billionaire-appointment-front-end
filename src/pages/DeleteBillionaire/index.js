import React from 'react';
import BillionaireDeleteList from '../../components/BillionaireDeleteList';
import style from './style.module.css';

const DeleteBillionaire = () => (
  <div className={`${style['section-ctn']} ${style['d-flex']} ${style.col}`}>
    <div className={`${style.layer} ${style['d-flex']} ${style.col}`}>
      <div className={`${style['delete-list-parent']} ${style['d-flex']} ${style.col}`}>
        <h2>DELETE BILLIONAIRES</h2>
        <hr />
        <div className={`${style['d-flex']} ${style['delete-list-ctn']}`}>
          <BillionaireDeleteList />
        </div>
      </div>
    </div>
  </div>
);

export default DeleteBillionaire;
