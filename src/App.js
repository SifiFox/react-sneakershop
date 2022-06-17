import React from 'react';

import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";



function App() {
    const [items, setItems] = React.useState([])
    const [cardOpened, setCardOpened] = React.useState(false)
    const [cartItems, setCartItems] = React.useState([])

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj])
    }


    React.useEffect(()=>{
        fetch("https://62ab2cb3a62365888bd69dc2.mockapi.io/items")
            .then((res)=>{
                return res.json()
            })
            .then((json)=>{
                setItems(json)
            })
    },[])

  return (
    <div className="wrapper clear">
        {cardOpened && <Drawer items={cartItems}  onClose={()=>setCardOpened(false)}/> }
      <Header onClickCart={()=> setCardOpened(true)} />


      <div className="content p-40 ">
        <div className={"mb-40 d-flex align-center justify-between"}>
          <h1>Все кроссовки</h1>
          <div className={"search__block d-flex"}>
            <img src="/img/search.svg" alt="Search"/>
            <input  placeholder={"Поиск..."} name="" id=""/>
          </div>
        </div>

        <div className="d-flex flex-wrap">

            {items.map((item)=> (
                  <Card
                      key={item.id}
                      title={item.title}
                      price={item.price}
                      imgUrl={item.img}
                      onFavorite={()=>{console.log('favorite clicked')}}
                      onPlus={(obj)=>onAddToCart(obj)}
                  />

            ))}

        </div>

      </div>
    </div>
  );
}

export default App;
