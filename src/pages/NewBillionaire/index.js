import React from 'react';
import { useSelector } from 'react-redux';
import BillionaireForm from '../../components/BillionaireForm';
import style from './style.module.css';

const NewBillionaire = () => {
  const { user } = useSelector((state) => state.users);

  const renderNewBillionaireComponent = (user) => {
    if (user && !user.error) {
      if (user.role !== 'admin') {
        return (
          <p>You&lsquo;re not allowed to create new billionaires</p>
        );
      }
      return (
        <BillionaireForm />
      );
    }
    return (
      <div>Please Log In before adding billionaires</div>
    );
  };

  return (
    <div className={`${style['section-ctn']} ${style['d-flex']} ${style.col}`}>
      <div className={`${style.layer} ${style['d-flex']} ${style.col}`}>
        <div className={`${style['form-parent']} ${style['d-flex']} ${style.col}`}>
          <h2>ADD A BILLIONAIRE</h2>
          <hr className={style.hr} />
          <div className={`${style['form-ctn']} ${style['d-flex']} ${style.col}`}>
            {renderNewBillionaireComponent(user)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBillionaire;
