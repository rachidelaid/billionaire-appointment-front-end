import React from 'react';
import BillionaireDeleteList from '../../components/BillionaireDeleteList';
import style from './style.module.css';

const DeleteBillionaire = () => (
  <div className={`${style['d-flex']}`}>
    <p>Hello from Delete page</p>
    <BillionaireDeleteList />
  </div>
);

export default DeleteBillionaire;
