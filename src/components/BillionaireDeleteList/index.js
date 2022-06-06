import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import style from './style.module.css';
import { fetchBillionaires } from '../../redux/billionaires';

// const apiURL = 'http://localhost:3000/api/billionaires';
const deleteApiURL = (id) => `http://localhost:3000/api/billionaires/${id}`;

// const getBillionaires = async () => {
//   const result = await fetch(apiURL)
//     .then((resp) => resp.json())
//     .then((data) => data)
//     .catch((error) => error);

//   return result;
// };

const BillionaireDeleteList = ({ user }) => {
  // const [billionaires, setBillionaires] = useState([]);
  const billionaires = useSelector((state) => state.billionaires.all);
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);

  // const setBillionairesList = async () => {
  //   const result = await getBillionaires();
  //   setBillionaires(result);
  // };

  useEffect(() => {
    dispatch(fetchBillionaires());
  }, []);

  const deleteBillionaire = async (id) => {
    const result = {
      response: {},
      data: {},
    };

    await fetch(deleteApiURL(id), {
      method: 'DELETE',
      headers: { Authorization: `${user.token_type} ${user.access_token}` },
    })
      .then((resp) => {
        result.response = resp;
        return resp.json();
      })
      .then((data) => {
        result.data = data;
        return data;
      })
      .catch((error) => error);

    return result;
  };

  const handleDeleteBillionaire = async (id) => {
    const result = await deleteBillionaire(id);
    dispatch(fetchBillionaires());

    if (result.response.ok) {
      setAlert(result.data);
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
      {alert && <div><p>{alert}</p></div>}
      {renderBillionaires(billionaires)}
    </div>
  );
};

BillionaireDeleteList.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default BillionaireDeleteList;
