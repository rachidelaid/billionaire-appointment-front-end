import React from 'react';
import { useSelector } from 'react-redux';
import BillionaireDeleteList from '../../components/BillionaireDeleteList';
import style from './style.module.css';

const DeleteBillionaire = () => {
  const { user } = useSelector((state) => state.users);

  const handleConditionalRendering = (user) => {
    if (user && !user.error) {
      if (user.role !== 'admin') {
        return (
          <p>You&lsquo;re not allowed to delete billionaires</p>
        );
      }
      return (
        <BillionaireDeleteList />
      );
    }
    return (
      <div>Please Log In before deleting billionaires</div>
    );
  };

  return (
    <div className={`${style['section-ctn']} ${style['d-flex']} ${style.col}`}>
      <div className={`${style.layer} ${style['d-flex']} ${style.col}`}>
        <div className={`${style['delete-list-parent']} ${style['d-flex']} ${style.col}`}>
          <h2>DELETE BILLIONAIRES</h2>
          <hr />
          <div className={`${style['d-flex']} ${style['delete-list-ctn']}`}>
            {handleConditionalRendering(user)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBillionaire;
