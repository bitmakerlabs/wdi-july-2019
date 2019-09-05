import React, { Component } from 'react';

class Procedure extends Component {

  state = {
    title: '...',
    description: '...'
  }

  componentDidMount() {
    console.log(`Fetching ${ this.props.match.params.id }`)
  }

  render() {
    return (
      <>
        <h1>{ this.state.title }</h1>
        <p>{ this.state.description }</p>
      </>
    )
  }
}

export default Procedure;
