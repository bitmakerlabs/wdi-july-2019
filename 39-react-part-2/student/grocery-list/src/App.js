import React, { Component } from 'react';
import Form from './Form';
import Filters from './Filters';
import List from './List';

const filters = [
  { name: 'All', value: 'all' },
  { name: 'Meat', value: 'meat' },
  { name: 'Produce', value: 'prod' },
  { name: 'Dairy', value: 'dairy' },
  { name: 'Bakery', value: 'bakery' },
];

const initialItems = [
  { name: 'Steak', type: 'meat', quantity: 3 },
  { name: 'Apples', type: 'prod', quantity: 4 },
  { name: 'Milk (1L, 2%)', type: 'dairy', quantity: 1 },
  { name: 'Baguettes', type: 'bakery', quantity: 2 },
];

class App extends Component {

  state = {
    items: initialItems
  }

  incrementItemQuantity = (index) => {
    const updatedItems = this.state.items.map((item, i) => {
      if (i === index) {
        item.quantity++;
      }

      return item;
    });

    this.setState({
      items: updatedItems
    })
  };

  decrementItemQuantity = (index) => {
    const updatedItems = this.state.items.map((item, i) => {
      if (i === index && item.quantity > 0) {
        item.quantity--;
      }

      return item;
    });

    this.setState({
      items: updatedItems
    })
  };

  render() {
    return (
      <main className="layout" id="app">
        <header className="header">
          <h1>Grocery List</h1>
        </header>
        <Form />
        <Filters filters={filters}/>
        <List
          items={this.state.items}
          incrementItem={this.incrementItemQuantity}
          decrementItem={this.decrementItemQuantity}
        />
      </main>
    );
  }

};

export default App;
