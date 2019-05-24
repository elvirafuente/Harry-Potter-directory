import React, {Fragment, Component} from 'react';
import './styles.css';
// import { Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage'

class App extends Component {
  render(){
    return (
      <Fragment >
        <header className="page__header">
          <h1>Harry Potter's Directory</h1>
        </header>
        <MainPage />
      </Fragment >
    )
  }
}

export default App;
