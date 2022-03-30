// import react & react development
import Rreact from 'react';
import ReactDOM from 'react-dom';

const getButtonText = () => {
  return "oy!"
}

// create react component
const App = () => {
  const tt = ['hi', 'there', 123]
  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text"/>
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        { tt }
      </button>
    </div>
  );
};

// show the react component
ReactDOM.render(
  <App />,
  // document.getElementById('root')
  document.querySelector('#root')
);
