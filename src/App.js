import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";

const arr = [];

function App() {

  const [cartOpened, setCardOpened] = React.useState(false);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose = { () => setCardOpened(false) } />}
      <Header onClickCart = { () => setCardOpened(true) }/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
        {arr.map((obj) => (
            <Card 
            title = {obj.title} 
            price = {obj.price} 
            imageUrl = {obj.imageUrl} 
            onFavorite = { () => console.log("Добавили в закладки")}
            onPlus = { () => console.log("Добавили в корзину")}  />
        ))}
         
        </div>
      </div>
    </div>
  );
}

export default App;