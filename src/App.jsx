import { useState } from 'react';
import './App.css';
import { List } from './components/List';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { TotalValue } from './components/TotalValue';

function App() {
  const [listTransactions, setlistTransactions] = useState([]);

  const addItem = (newItem) => {
    setlistTransactions([...listTransactions, newItem])
  }

  const handleItem = (itemId) => {
    const newList = listTransactions.filter((e, index) => index !== itemId)
    setlistTransactions(newList)
  }

  return (
    <div className="App">
      <Header />
      <main className='mainContainer'>
        <section className='sectionContainer1'>
          <Form callback={addItem} />
          <TotalValue list={listTransactions} />
        </section>
        <section className='sectionContainer2'>
          <List list={listTransactions} deleted={handleItem} />
        </section>
      </main>
    </div>
  )
}

export default App
