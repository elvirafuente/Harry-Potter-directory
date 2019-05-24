import React, { Fragment, Component } from 'react';
import './styles.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage'
import CharacterDetail from '../CharacterDetail'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchData: [],
      filters: {
        byName: '',
      },
      isFetching: true,
    };
    this.handleInputName = this.handleInputName.bind(this);
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
              id: index + 1,
            }
          })
          this.setState({
            fetchData: fetchData,
            isFetching: false,
          })
        })
    )
  }

  handleInputName(event) {
    const { value } = event.target;
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          byName: value,
        }
      }
    })
  }

  render() {
    return (
      <Fragment >
        <header className="page__header">
          <h1>Harry Potter's Directory</h1>
        </header>
        {this.state.isFetching
          ? <p>Loading...</p>
          : <Switch >
            <Route
              exact path="/"
              render={() => {
                return (
                  <MainPage
                    fetchData={this.state.fetchData}
                    handleInputName={this.handleInputName}
                    inputNameValue={this.state.filters.byName}
                  />
                )
              }
              }

            />
            <Route
              path="/character/:id"
              render={(routerProps) => {
                return (
                  <CharacterDetail
                    match={routerProps.match.params.id}
                    usersInfo={this.state.fetchData}
                  />
                )
              }}
            />
          </Switch>
        }
      </Fragment >
    )
  }
}

export default App;
