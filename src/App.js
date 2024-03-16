import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [state, setState] = useState(0)

  const [data, setData] = useState([])

  useEffect(() => {
    console.log('use effect ishladi');
  }, [state])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(response => {
      console.log(response);
      setData(response.data)
    })
    .catch(err => console.log(err))
  }, [state])
  

  return (
    <div className="app">
      <h1>Products</h1>
      <div className='products_container'>
        {
          data?.map((i, nx) => (
            <div key={nx} className="card_container">
              <img src={i.image} alt="" />
              <div className="card_text">
                <p>{i.title}</p>
                <p className='price'>{i.price} $</p>
                <span>{i.description}</span>
              </div>
          </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
