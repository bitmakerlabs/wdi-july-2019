import React, { Component } from 'react';

class Listing extends Component {

  state = {
    faves: 0
  }

  incrementFaves = () => {
    // ---- This can cause "race conditions" ----
    // this.setState({
    //   faves: this.state.faves + 1
    // })
    // ---- Better to write with function argument ----
    this.setState(
      (prevState) => (
         {
           faves: prevState.faves + 1
         }
      )
    )
  }

  render() {
    const { title, description, views } = this.props

    return (
      <div>
        <h1>{title}</h1>
        <h2>Views: {views}</h2>
        <h3>Faves: {this.state.faves}</h3>
        <p>{description}</p>
        <button onClick={ this.incrementFaves }>Favourite!</button>
      </div>
    )
  }
}

export default Listing;
