import React from 'react';
import './index.scss';

import axios from 'axios';

import { Header } from "./components/Header";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { Drawer } from "./components/Drawer";
import { MobileMenu } from './components/MobileMenu';
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { Route, Switch } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import AppContext from './components/context';

function App() {
  // const [count, setCount] = React.useState(100);
  // const plus = () => { setCount(count + 100)};
  // const minus = () => { if(count>100){setCount(count - 100)}};

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [menuOpened, setMenuOpened] = React.useState(false);
  const [itemOpened, setItemOpened] = React.useState(false);

  
  const onAddToCart = async(obj) => {
    try{
      const findItem = cartItems.find((item) => item.title === obj.title);
      if(findItem){
        await axios.delete('https://6298d5d6f2decf5bb74cc366.mockapi.io/cart/${obj.id}');
        setCartItems((prev) => prev.filter((item) => item.title !== obj.title));
      } else{
        await axios.post('https://6298d5d6f2decf5bb74cc366.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    }catch(error){
      alert('Товар уже в корзине или произошла какая-то ошибка');
      console.error(error);
    }
    
  };

  const onRemoveItem = (id) => {
    try{
      axios.delete(`https://6298d5d6f2decf5bb74cc366.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch(error){
      alert('Ошибка при удалении из Корзины');
      console.error(error);
    }
    
  };

  // const sortItemsNamePlus=(items)=>{items.sort((a,b)=>a-b)};

  React.useEffect(() => {
    async function fetchData() {
      try{
        const[cartResponse, itemsResponse] = await Promise.all(
          [
            axios.get('https://6298d5d6f2decf5bb74cc366.mockapi.io/cart'),
            axios.get('https://6298d5d6f2decf5bb74cc366.mockapi.io/items'),
          ]
        );
          setCartItems(cartResponse.data);
          setItems(itemsResponse.data);
        }
        catch(error){
          alert('Непредвиденная ошибка при обработке данных');
          console.error(error);
        }
      }
      fetchData();
    }, []);

  return (
    <AppContext.Provider
    value={{
      items,
      cartItems,
      setCartOpened,
      setMenuOpened,
      setCartItems,
    }}>
    <div className="App">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
      {menuOpened && <MobileMenu onClose={() => setMenuOpened(false)} />}
      {itemOpened && <Card onClose={() => setItemOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} onClickHamburger={() => setMenuOpened(true)}/>
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
    </AppContext.Provider>
  );
}

export default App;
