import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css';

const apiURL = 'http://localhost:3000/api/billionaires';

const postBillionaire = async (form) => {
  const result = {
    response: {},
    data: {},
  };

  const response = await fetch(apiURL, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',

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
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    let post = await postBillionaire(form);
    console.log(post);
    if (post.response.ok) {
      console.log('aca llegue');
      navigate('/');
    } else if (!post.response.ok) {
      const arr = Object.entries(post.data);
      setAlert(arr);
      post = null;
    }
  };

  const renderAlert = () => (
    <div className={`${style['alert-ctn']} ${style['d-flex']} ${style.col}`}>
      {alert.map((error) => <p className={style['alert-item']}>{`${error[0].toUpperCase()} ${error[1]}`}</p>)}
    </div>
  );

  return (
    <div className={`${style['d-flex']} ${style.col}`}>
      {alert ? renderAlert() : null}
      <form onSubmit={handleSubmit} className={`${style['d-flex']} ${style.col} ${style['form-ctn']}`}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Price:
          <input type="number" name="price" step=".01" />
        </label>
        <label>
          image:
          <input type="text" name="image" />
        </label>
        <label>
          description:
          <input type="text" name="description" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default BillionaireForm;
