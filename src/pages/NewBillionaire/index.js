import React from 'react';
import BillionaireForm from '../../components/BillionaireForm';
import style from './style.module.css';

const NewBillionaire = () => (
  <div className={`${style['section-ctn']} ${style['d-flex']} ${style.col}`}>
    <div className={`${style.layer} ${style['d-flex']} ${style.col}`}>
      <div className={`${style['form-parent']} ${style['d-flex']} ${style.col}`}>
        <h2>ADD A BILLIONAIRE</h2>
        <hr />
        <div className={`${style['form-ctn']} ${style['d-flex']} ${style.col}`}>
          <BillionaireForm />
        </div>
      </div>
    </div>
  </div>
);

export default NewBillionaire;
