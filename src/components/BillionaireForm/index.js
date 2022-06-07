import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import style from './style.module.css';
import { addBillionaire } from '../../redux/billionaires';

// const apiURL = 'http://localhost:3000/api/billionaires';

// const postBillionaire = async (form, user) => {
//   const result = {
//     response: {},
//     data: {},
//   };

//   await fetch(apiURL, {
//     method: 'POST',
//     mode: 'cors',
//     cache: 'no-cache',
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `${user.token_type} ${user.access_token}`,
//     },
//     redirect: 'follow',
//     referrerPolicy: 'no-referrer',
//     body: JSON.stringify({
//       name: form.name.value,
//       title: form.title.value,
//       price: form.price.value,
//       image: form.image.value,
//       description: form.description.value,
//     }),
//   })
//     .then((resp) => {
//       result.response = resp;
//       return resp.json();
//     })
//     .then((data) => {
//       result.data = data;
//       return data;
//     });
//   return result;
// };

const BillionaireForm = () => {
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const billionaire = {
      name: form.name.value,
      title: form.title.value,
      price: form.price.value,
      image: form.image.value,
      description: form.description.value,
    };

    let post = await dispatch(addBillionaire(billionaire));
    console.log(post);
    if (post.payload.id) {
      navigate(`/details/${post.payload.id}`);
    } else if (!post.payload.id) {
      // console.log(post.data);
      const arr = Object.entries(post.payload);
      // console.log(arr);
      setAlert(arr);
      post = null;
    }
  };

  const renderAlert = (alert) => (
    <div className={`${style['alert-ctn']} ${style['d-flex']} ${style.col}`}>
      {alert.map((error) => <p key={alert.indexOf(error)} className={style['alert-item']}>{`${error[0].toUpperCase()} ${error[1]}`}</p>)}
    </div>
  );

  return (
    <div className={`${style.col} ${style['d-flex']}`}>
      <form onSubmit={handleSubmit} className={`${style['d-flex']} ${style.col} ${style['form-']}`}>
        {alert ? renderAlert(alert) : null}
        <label htmlFor="name">
          <p>Name:</p>
          <input type="text" name="name" />
        </label>
        <label htmlFor="title">
          <p>Title:</p>
          <input type="text" name="title" />
        </label>
        <label htmlFor="price">
          <p>Price:</p>
          <input type="number" name="price" step=".01" />
        </label>
        <label htmlFor="image">
          <p>Image URL:</p>
          <input type="text" name="image" />
        </label>
        <label htmlFor="description">
          <p>Description:</p>
          <textarea name="description" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

// BillionaireForm.propTypes = {
//   user: PropTypes.instanceOf(Object).isRequired,
// };

export default BillionaireForm;
