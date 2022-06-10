import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import style from './style.module.css';
import { deleteBillionaire } from '../../redux/billionaires';

const BillionaireDeleteList = ({ billionaires }) => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);

  const handleDeleteBillionaire = async (id) => {
    const result = await dispatch(deleteBillionaire(id));
    if (result.payload) {
      setAlert(['Billionaire successfully deleted']);
    }
  };

  const renderBillionaire = (billionaire) => {
    const b = billionaire;

    return (
      <div key={b.id} className={`${style['billionaire-ctn']} ${style['d-flex']} ${style.col}`}>
        <img src={b.image} alt={`${b.name} profile pic`} className={style.img} />
        <h3>{b.name}</h3>
        <button
          type="button"
          className={`${style.click}`}
          onClick={() => handleDeleteBillionaire(b.id)}
        >
          DELETE
        </button>
      </div>
    );
  };

  const renderBillionaires = (billionaires) => {
    if (billionaires.length > 0) {
      return (
        <div className={`${style['billionaires-ctn']} ${style['d-flex']}`}>
          {
            billionaires.map((billionaire) => renderBillionaire(billionaire))
          }
        </div>
      );
    }
    return (
      <div>There are no billionaires!</div>
    );
  };

  return (
    <div className={`${style['delete-list-component-ctn']} ${style['d-flex']} ${style.col}`}>
      {alert && <p>{alert}</p>}
      {renderBillionaires(billionaires)}
    </div>
  );
};

BillionaireDeleteList.propTypes = {
  billionaires: PropTypes.instanceOf(Object).isRequired,
};

export default BillionaireDeleteList;
