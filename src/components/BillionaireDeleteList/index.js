import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import style from './style.module.css';
import { fetchBillionaires } from '../../redux/billionaires';
import { deleteBillionaire } from '../../redux/billionaires';

// const deleteApiURL = (id) => `http://localhost:3000/api/billionaires/${id}`;

const BillionaireDeleteList = ({ billionaires }) => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    dispatch(fetchBillionaires());
  }, []);

  // const deleteBillionaire = async (id) => {
  //   const result = {
  //     response: {},
  //     data: {},
  //   };

  //   await fetch(deleteApiURL(id), {
  //     method: 'DELETE',
  //     headers: { Authorization: `${user.token_type} ${user.access_token}` },
  //   })
  //     .then((resp) => {
  //       result.response = resp;
  //       return resp.json();
  //     })
  //     .then((data) => {
  //       result.data = data;
  //       return data;
  //     })
  //     .catch((error) => error);

  //   return result;
  // };

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
        <img src={b.image} alt={`${b.name} profile pic`} />
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
