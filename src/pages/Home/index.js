import React from 'react';
import style from './style.module.css'
import Billionare from '../../components/Billionare';
const mockData = [
  {
    "id": 1,
    "name" : "Jeff Bezos",
    "title" : "Amazon CEO",
    "image" : "https://github.com/orozCoding/billionares-pictures/blob/main/round_pictures/pc_jeff.png?raw=true",
    "price" : 8000,
    "description" : "Jeff Bezos is an American entrepreneur, media proprietor, investor, computer engineer, and commercial astronaut. He is the founder, executive chairman and former president and CEO of Amazon. With a net worth of around US$140 billion as of May 2022, Bezos is the second-wealthiest person in the world and was the wealthiest from 2017 to 2021 according to both Bloomberg's Billionaires Index and Forbes.",
  },
  {
    "id": 2,
    "name" : "Jeff Bezos1",
    "title" : "Amazon CEO",
    "image" : "https://github.com/orozCoding/billionares-pictures/blob/main/round_pictures/pc_jeff.png?raw=true",
    "price" : 8000,
    "description" : "Jeff Bezos is an American entrepreneur, media proprietor, investor, computer engineer, and commercial astronaut. He is the founder, executive chairman and former president and CEO of Amazon. With a net worth of around US$140 billion as of May 2022, Bezos is the second-wealthiest person in the world and was the wealthiest from 2017 to 2021 according to both Bloomberg's Billionaires Index and Forbes.",
  }
  ,{
    "id": 3,
    "name" : "Jeff Bezos2",
    "title" : "Amazon CEO",
    "image" : "https://github.com/orozCoding/billionares-pictures/blob/main/round_pictures/pc_jeff.png?raw=true",
    "price" : 8000,
    "description" : "Jeff Bezos is an American entrepreneur, media proprietor, investor, computer engineer, and commercial astronaut. He is the founder, executive chairman and former president and CEO of Amazon. With a net worth of around US$140 billion as of May 2022, Bezos is the second-wealthiest person in the world and was the wealthiest from 2017 to 2021 according to both Bloomberg's Billionaires Index and Forbes.",
  },
]
const Home = () => (
  <div className={style.container}>
    <div>
    <h1 className={style.title}>TOP SPEAKERS</h1>
    <h2 className={style.subtitle}>Please select a speaker</h2>
    </div>
    <div className={style.list}>
      {
        mockData.map(item=> <Billionare item={item}  key={item.id}/>)
      }
    </div>
    <button className={style.next}>
      <i class={`bi bi-caret-right ${style.icon}`}></i>
    </button>
  </div>
);

export default Home;
