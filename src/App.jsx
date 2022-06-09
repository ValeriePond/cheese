import React from 'react';
import './index.scss';

import axios from 'axios';

import { Header } from "./components/Header";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { Drawer } from "./components/Drawer";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { Route, Switch } from 'react-router-dom';
import { NotFound } from './pages/NotFound';

function App() {
  // const [count, setCount] = React.useState(100);
  // const plus = () => { setCount(count + 100)};
  // const minus = () => { if(count>100){setCount(count - 100)}};

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [itemOpened, setItemOpened] = React.useState(false);

  const onAddToCart = (obj) => {
    axios.post('https://6298d5d6f2decf5bb74cc366.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6298d5d6f2decf5bb74cc366.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // const sortItemsNamePlus=(items)=>{items.sort((a,b)=>a-b)};


  React.useEffect(() => {
    axios.get('https://6298d5d6f2decf5bb74cc366.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://6298d5d6f2decf5bb74cc366.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  return (
    <div className="App">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
      {itemOpened && <Card onClose={() => setItemOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <Switch>
        <Route path="/" exact>
          <Home
                  items={items}
                  onAddToCart={onAddToCart}
                  setItemOpened={setItemOpened}
            />
        </Route>
        

        <Route path="/catalog" exact>
          <Catalog 
                  items={items}
                  setItemOpened={setItemOpened} 
                  onAddToCart={onAddToCart}
          /> 
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>      
      <Faq />
      <Footer /> 
    </div>
  );
}

export default App;
