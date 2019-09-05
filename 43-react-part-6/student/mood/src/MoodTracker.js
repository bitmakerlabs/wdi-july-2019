import React from 'react';

class MoodTracker extends React.Component {

  // React <v16 Syntax
  // constructor() {
  //   super()
  //
  //   this.state = {
  //     moodPoints: 1
  //   }
  // }

  // React v16 Syntax
  state = {
    moodPoints: 1
  }

  increaseMood = () => {
    // cond ? result1 : result2
    // --- same as ---
    // if (cond) {
    //   result1
    // }
    // else {
    //   result2
    // }
    const newMoodPoints = this.state.moodPoints >= 10 ? 1 : this.state.moodPoints + 1

    // Happens in the FUTURE sometime, whenever React feels like it
    this.setState({
      moodPoints: newMoodPoints
    })
  }

  render() {
    return(
      <>
        <h1>{ this.props.name }'s Mood Tracker</h1>
        <p>On a scale of 1-10</p>
        <p>You are this happy: { this.state.moodPoints }</p>

        <button onClick={ this.increaseMood }>Cheer Up!</button>
      </>
    )
  }
}

export default MoodTracker;
