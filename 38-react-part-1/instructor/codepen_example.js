// Class based component
//----------------------
class Greeting extends React.Component {
  render() {
    return (
      <h1 className='greetings'>Hello World from Component</h1>
    );
  }
};

ReactDOM.render(
  <Greeting />,
  document.querySelector('#app')
);

// Multiple Greetings (Class based component)
//-------------------------------------------
class Greeting extends React.Component {
  render() {
    return (
      <h1 className='greetings'>Hello World from Component</h1>
    );
  }
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Greeting />
        <Greeting />
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);

// Multiple Greetings (with Props)
//-------------------------------------------
class Greeting extends React.Component {
  render() {
    return (
      <h1 className='greetings'>Hello {this.props.firstName} {this.props.lastName}</h1>
    );
  }
};

class App extends React.Component {
  render() {
    return (
      <>
        <Greeting firstName="Grace" lastName="Hopper" />
        <Greeting firstName="Alan" lastName="Turing" />
      </>
    );
  }
};

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);

// Multiple Greetings (Function based component)
//--------------------------------------
const Greeting = (props) => {
  return (
    <h1 className='greetings'>Hello {props.firstName} {props.lastName}</h1>
  );
};

const App = () => {
  return (
    <div>
      <Greeting firstName="Grace" lastName="Hopper" />
      <Greeting firstName="Alan" lastName="Turing" />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);




// React.Fragment
// With Props
//--------------------------------------
const Greeting = (props) => {
  return (
    <h1 className='greetings'>Hello {props.firstName} {props.lastName}</h1>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <Greeting firstName="Grace" lastName="Hopper" />
      <Greeting firstName="Alan" lastName="Turing" />
    </React.Fragment>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);

// With Multiple Props
// and Destructured props
//--------------------------------------
const Greeting = ({firstName, lastName}) => {
  return (
    <h1 className='greetings'>Hello {firstName} {lastName}</h1>
  );
};

const App = () => {
  return (
    <>
      <Greeting firstName="Grace" lastName="Hopper" />
      <Greeting firstName="Alan" lastName="Turing" />
    </>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);
