import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ["Razzak", "Jasim", "Manna", "Salmanshah", "Ferdos", "Shakib"];
  const products = [
    { name: 'Photoshop', price: '$90' },
    { name: 'Illustrator', price: '$60' },
    { name: 'PDF Reader', price: '$6' }
  ]
  const nayokNames = nayoks.map(nayok => nayok)
  console.log(nayokNames);
  const productNames = products.map(product => product.name)
  console.log(productNames)
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product = {product}></Product>)
        }
        
      </header>
    </div>
  );
}

function Users() {
   const [users, setUsers] = useState([]);
   useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => setUsers(data))
   }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() =>setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '2px solid green',
    borderRadius: '5px',
    backgroundColor: 'gray',
    height: '200px',
    weight: '200',
    float: 'left'
  }
  const { name, price } = props.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Bye Now</button>
    </div>
  )
}


export default App;
