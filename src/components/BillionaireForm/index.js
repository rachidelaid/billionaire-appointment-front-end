import React from 'react';
import style from './style.module.css';

const apiURL = 'http://localhost:3000/api/billionaires'



const postBillionaire = async (form) => {

  const response = await fetch(apiURL, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'

    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({
      name: form.name.value,
      title: form.title.value,
      price: form.price.value,
      image: form.image.value,
      description: form.description.value
    })
  });
  return response.json();
}

const handleSubmit = async (e) => {
  e.preventDefault();
  let form = e.target
  console.log(form.name.value);
  await postBillionaire(form)
  console.log('Redirecting to billionaire details page');
}

const BillionaireForm = () => (
  <form onSubmit={handleSubmit}>
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
      <input type="number" name="price" />
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
);
export default BillionaireForm;
