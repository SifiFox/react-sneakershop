import React from 'react';

import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


const arr = [
    {
        "id": 1,
        "title": "Мужские Кроссовки Nike Blazer Mid Suede",
        "price": 10500,
        "img": "/img/sneakers/1.jpg"
    },
    {
        "id": 2,
        "title": "Мужские Кроссовки Nike Air Max 270",
        "price": 12999,
        "img": "/img/sneakers/2.jpg"
    },
    {
        "id": 3,
        "price": 11111,
        "title": "Мужские Кроссовки Nike Blazer Mid Suede",
        "img": "/img/sneakers/3.jpg"
    },
    {
        "id": 4,
        "title": "Кроссовки Puma X Aka Boku Future Rider",
        "price": 22222,
        "img": "/img/sneakers/4.jpg"
    }
];



function App() {

    const [cardOpened, setCardOpened] = React.useState(false)





  return (
    <div className="wrapper clear">
        {cardOpened && <Drawer onClose={()=>setCardOpened(false)}/> }
      <Header onClickCart={()=> setCardOpened(true)} />


      <div className="content p-40 ">
        <div className={"mb-40 d-flex align-center justify-between"}>
          <h1>Все кроссовки</h1>
          <div className={"search__block d-flex"}>
            <img src="/img/search.svg" alt="Search"/>
            <input  placeholder={"Поиск..."} name="" id=""/>
          </div>
        </div>

        <div className="d-flex">

            {arr.map((obj)=> (
                  <Card
                      key={obj.id}
                      title={obj.title}
                      price={obj.price}
                      imgUrl={obj.img}
                      onClickPlus={()=>{console.log('plus clicked')}}
                      onClickFavorite={()=>{console.log('favorite clicked')}}
                  />

            ))}

        </div>

      </div>
    </div>
  );
}

export default App;
