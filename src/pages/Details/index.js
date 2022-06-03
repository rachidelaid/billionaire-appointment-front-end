import React from 'react'
import { useParams } from 'react-router'
import style from './style.module.css'
import mockData from '../../mockdata'
const Details = () => {
 const {id} = useParams()
  const item = mockData.find(data => data.id ===parseInt(id))
  
  return (
    <div className={style.page}>
    <div className={style.container}>

      <section className={style['image-section']}>
        <img src={item.image} alt={item.id}className={style.image} />
      </section>
      <section className={style.details}>
        <header>
          <h2 className={style.name}>{item.name}</h2>
          <h3 className={style.title}>{item.title}</h3>
        </header>
        <div className={style.tile}>
          <span>price</span>
          <span>{item.price}</span>
        </div>
        <div className={style.bio}>
          <h3>Bio</h3>
          <p>{item.description}</p>
        </div>
      </section>
      <button className={style.back}>
        <i class={`bi bi-caret-left ${style.icon}`}></i>
      </button>
    </div>
    </div>
  )
}

export default Details