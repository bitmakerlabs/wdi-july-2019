import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from './Listing';

const App = () => {

  const initialListings = [
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

  const listingElements = initialListings.map(
    //(listing) => <Listing title={listing.title} description={listing.description} views={listing.views} />
    // --- same as ---
    (listing, i) => <Listing key={i} {...listing} />
  )

  return (
    <div className="App">
      { listingElements }
    </div>
  );
}

export default App;
