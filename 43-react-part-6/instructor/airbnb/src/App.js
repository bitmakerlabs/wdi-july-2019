import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from './Listing';

class App extends Component {

  initialListings = [
    {
      title: "My Cozy House",
      description: "Clean and modern",
      views: 100
    },
    {
      title: "Cute Cottage",
      description: "Cozy and clean",
      views: 50
    },
    {
      title: "Penthouse $$$",
      description: "Has a grand piano",
      views: 500
    },
  ]

  state = {
    listings: this.initialListings
  }

  incrementViews = () => {
    this.setState(
      (prevState) => {
        const newListings = prevState.listings.map(
          (l) => ({
            title: l.title,
            description: l.description,
            views: l.views + 1
          })
        )
        return { listings: newListings }
      }
    )
  }

  render() {
    const listingElements = this.state.listings.map(
      (listing, i) => <Listing key={i} {...listing} />
    )

    return (
      <div className="App">
        { listingElements }
        <hr />
        <button onClick={this.incrementViews}>+ Views</button>
      </div>
    );
  }
}

export default App;
