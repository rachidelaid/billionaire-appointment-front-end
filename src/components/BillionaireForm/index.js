import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css';

const apiURL = 'http://localhost:3000/api/billionaires';

const postBillionaire = async (form, user) => {
  const result = {
    response: {},
    data: {},
  };

  await fetch(apiURL, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${user.token_type} ${user.access_token}`,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      name: form.name.value,
      title: form.title.value,
      price: form.price.value,
      image: form.image.value,
      description: form.description.value,
    }),
  })
    .then((resp) => {
      result.response = resp;
      return resp.json();
    })
    .then((data) => {
      result.data = data;
      return data;
    });
  return result;
};

const BillionaireForm = () => {
  const { user } = useSelector((state) => state.users);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    let post = await postBillionaire(form, user);
    if (post.response.ok) {
      navigate(`/details/${post.data.id}`);
    } else if (!post.response.ok) {
      const arr = Object.entries(post.data);
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
export default BillionaireForm;
