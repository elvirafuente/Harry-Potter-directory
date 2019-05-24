import React, { Fragment, Component } from 'react';
import './styles.css';
// import { Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetchData: [],
    }
  }

  componentDidMount() {
    this.fetchService();

  }

  fetchService() {
    const url = "http://hp-api.herokuapp.com/api/characters";
    return (
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const fetchData = data.map((item, index) => {
            return {
              ...item,
              id: index,
            }
          })
          this.setState({
            fetchData:fetchData,
          })
        })
    )
  }

  render() {
    return (
      <Fragment >
        <header className="page__header">
          <h1>Harry Potter's Directory</h1>
        </header>
        <MainPage fetchData={this.state.fetchData}/>
      </Fragment >
    )
  }
}

export default App;
