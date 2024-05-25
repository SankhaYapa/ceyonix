import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
      axios.get('http://localhost:8082/api/items') 
          .then(res => setItems(res.data))
          .catch(err => console.error(err));
  }, []);

  const addItem = () => {
      axios.post('http://localhost:8082/api/items', { name: newItem }) 
          .then(res => setItems([...items, res.data]))
          .catch(err => console.error(err));
  };

  return (
      <div>
          <h1>Items</h1>
          <ul>
              {items.map(item => (
                  <li key={item._id}>{item.name}</li>
              ))}
          </ul>
          <input 
              type="text" 
              value={newItem} 
              onChange={e => setNewItem(e.target.value)} 
          />
          <h1></h1>
          <button onClick={addItem}>Add Item</button>
      </div>
  );
}

export default App
