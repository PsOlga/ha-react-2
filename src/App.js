import Greeting from './components/Greeting';
import ShoppingList from './components/ShoppingList';
import OrderStatus from './components/OrderStatus';
import './App.css';



function App() {

  const items = ["Молоко", "Хлеб", "Сыр", "Яблоки", "Кофе", "Чай", "Мясо", "Рыба", "Йогурт", "Масло"];

  const orders = [
  { orderId: 101, status: 'в пути' },
  { orderId: 102, status: 'готовится' },
  { orderId: 103, status: 'в пути' },
  { orderId: 104, status: 'в пути' },
  { orderId: 105, status: 'доставлено' },
  { orderId: 106, status: 'в пути' }
];


  return (
    <div className="App">
     <Greeting name={"Max"} fontColor={"teal"} fontSz={"25px"}/>
     <Greeting name={"Julia"} fontColor={"red"} fontSz={"25px"}/>

    <div>
    <ShoppingList items={items} />
    
    {orders.map((el, ind) => (
        <OrderStatus key={ind} orderId={el.orderId} status={el.status} />
      ))}
  

    </div>
    </div>
  );
}

export default App;
