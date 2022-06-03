import React, { useState, useEffect } from 'react';
import style from './style.module.css';

const apiURL = 'http://localhost:3000/api/billionaires'
const deleteApiURL = (id) => {
  return `http://localhost:3000/api/billionaires/${id}`
}

const getBillionaires = async () => {
  const result =
    await fetch(apiURL)
      .then((resp) => resp.json())
      .then((data) => data)
      .catch((error) => error);

  return result
}

const BillionaireDeleteList = () => {

  const [billionaires, setBillionaires] = useState([]);
  const [alert, setAlert] = useState(null);

  const setBillionairesList = async () => {
    const result = await getBillionaires();
    setBillionaires(result);
  }

  useEffect(() => {

    setBillionairesList();

  }, [])

  const deleteBillionaire = async (id) => {
    let result = {
      response: {},
      data: {}
    }

      await fetch(deleteApiURL(id), {
        method: 'DELETE'
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

    return result
  }

  const handleDeleteBillionaire = async (id) => {
    const result = await deleteBillionaire(id);
    setBillionairesList();

    if (result.response.ok) {
      setAlert(result.data)
    }
  }


  const renderBillionaire = (billionaire) => {
    const b = billionaire

    return (
      <div key={b.id}className={`${style['billionaire-ctn']} ${style['d-flex']} ${style.col}`}>
        <h2>{b.name}</h2>
        <button type="button"
          onClick={() => handleDeleteBillionaire(b.id)}>DELETE</button>
      </div>
    )
  }

  const renderBillionaires = (billionaires) => {
    if (billionaires.length > 0) {
      return (<div>{
        billionaires.map((billionaire) =>
          renderBillionaire(billionaire)
        )
      }</div>
      )
    } else {
      return (
        <div>There are no billionaires!</div>
      )
    }
  }

  return (
    <div>
      <p>Hello from Delete List</p>
      {alert && 
      <div><p>{alert}</p></div>}
      <div>{renderBillionaires(billionaires)}</div>
    </div>
  )
};

export default BillionaireDeleteList;
